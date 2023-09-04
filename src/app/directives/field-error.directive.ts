import { Directive, ElementRef, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[checkFieldError]'
})
export class FieldErrorDirective implements OnChanges {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnChanges() {
    if (`${this.elementRef.nativeElement.classList.value}`.includes('ng-invalid')) {
      this.renderer.addClass(this.elementRef.nativeElement, 'alert-error');
      return;
    }
    this.renderer.removeClass(this.elementRef.nativeElement, 'alert-error');
  }

  // @HostListener('keyup', ['$event'])
  // handleValue(event: any) {
  //   event.target.value = event.target.value.toUpperCase();
  // }
}
