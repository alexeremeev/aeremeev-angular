import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input [highlight]'
})
export class HighlightDirective {
  @HostListener('focus', ['$event'])
  onFocus() {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', 'green');
  }

  @HostListener('input', ['$event'])
  onInput() {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', 'blue');
  }
  @HostListener('blur', ['$event'])
  onBlur() {
    this.renderer.removeStyle(this.element.nativeElement, 'border-color');
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

}
