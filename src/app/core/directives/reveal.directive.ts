import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: false,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') direction: 'left' | 'right' | 'up' = 'up';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const el = this.el.nativeElement as HTMLElement;
    this.renderer.addClass(el, 'reveal-hidden');
    this.renderer.addClass(el, `reveal-from-${this.direction}`);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(el, 'reveal-visible');
          this.observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
