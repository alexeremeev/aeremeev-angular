import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input [log]'
})
export class LogDirective {
  @HostListener('blur', ['$event'])
  onInput(event) {
    console.log(event.target.value);
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }
}
