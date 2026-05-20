import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/DEINE_FORM_ID';

interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form: FormGroup;
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, Validators.requiredTrue],
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }

  onBlur(field: string): void {
    this.form.get(field)?.markAsTouched();
  }

  getError(field: string): string {
    const ctrl = this.form.get(field);
    if (!ctrl || !ctrl.touched || ctrl.valid) return '';
    if (ctrl.hasError('required') || ctrl.hasError('requiredTrue')) return 'CONTACT.REQUIRED';
    if (ctrl.hasError('email')) return 'CONTACT.EMAIL_INVALID';
    if (ctrl.hasError('minlength')) return 'CONTACT.MIN_LENGTH';
    return '';
  }

  get canSubmit(): boolean {
    return this.form.valid && this.status !== 'sending';
  }

  submit(): void {
    if (!this.canSubmit) {
      this.form.markAllAsTouched();
      return;
    }
    this.status = 'sending';

    const payload: ContactFormPayload = {
      name: String(this.form.value.name),
      email: String(this.form.value.email),
      message: String(this.form.value.message),
    };

    this.http.post(FORMSPREE_ENDPOINT, payload, {
      headers: { Accept: 'application/json' },
      responseType: 'text',
    }).subscribe({
      next: () => {
        this.status = 'success';
        this.form.reset();
      },
      error: () => {
        this.status = 'error';
      },
    });
  }
}
