import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdbgpor';

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
export class Contact implements OnDestroy {
  form: FormGroup;
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  private successTimer: ReturnType<typeof setTimeout> | null = null;

  static noWhitespace(control: AbstractControl): ValidationErrors | null {
    const v = control.value as string;
    return v && v.trim().length === 0 ? { whitespace: true } : null;
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2), Contact.noWhitespace]],
      email:   ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Contact.noWhitespace]],
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
    if (ctrl.hasError('required') || ctrl.hasError('requiredTrue') || ctrl.hasError('whitespace')) return 'CONTACT.REQUIRED';
    if (ctrl.hasError('email')) return 'CONTACT.EMAIL_INVALID';
    if (ctrl.hasError('minlength')) return 'CONTACT.MIN_LENGTH';
    return '';
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid || this.status === 'sending') return;
    this.status = 'sending';

    const payload: ContactFormPayload = {
      name:    (this.form.value.name as string).trim(),
      email:   (this.form.value.email as string).trim(),
      message: (this.form.value.message as string).trim(),
    };

    this.http.post(FORMSPREE_ENDPOINT, payload, {
      headers: { Accept: 'application/json' },
      responseType: 'text',
    }).subscribe({
      next: () => {
        this.status = 'success';
        this.form.reset();
        this.successTimer = setTimeout(() => { this.status = 'idle'; }, 5000);
      },
      error: () => {
        this.status = 'error';
      },
    });
  }

  ngOnDestroy(): void {
    if (this.successTimer) clearTimeout(this.successTimer);
  }
}
