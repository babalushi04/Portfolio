import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader implements OnInit {
  visible = true;
  rendered = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = false;
      this.cdr.detectChanges();
    }, 350);

    setTimeout(() => {
      this.rendered = false;
      this.cdr.detectChanges();
    }, 650);
  }
}
