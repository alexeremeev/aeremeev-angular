import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input [validDate]'
})
export class ValidDateDirective {

  @HostListener('input', ['$event'])
  blockLetters(event) {
    this.element.nativeElement.value = event.target.value.replace(/[^ -.0-9]+/g, '');
  }

  constructor(private element: ElementRef) {
  }

}
