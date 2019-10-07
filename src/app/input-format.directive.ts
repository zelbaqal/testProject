import { Directive, HostListener, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el : ElementRef) { }

@Input('appInputFormat') format;

@HostListener('blur') onBlur(){
  let value:string = this.el.nativeElement.value;
  this.el.nativeElement.value =  this.format == 'lowercase' ?  value.toLowerCase() : value.toUpperCase();
 
 
}




}
