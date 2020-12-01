import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;
  // Created an input property 'appInputFormat' to be used on front end

  constructor(private el: ElementRef) { }
  // Created an element to access DOM Element using ElementRef wrapper
  
  @HostListener('blur') onBlur() {
    console.log("On Blur");  
    let value: string = this.el.nativeElement.value;
    // Assigning the native element to access DOM element and assign it to a value 'value'

    this.el.nativeElement.value = (this.format == 'lowercase') ? value.toLowerCase() : value.toUpperCase();
    // Assigning the manipulated 'value' conditionally based on the value assigned to 'format' on front end to 'value' which has direct access to DOM elements
    
  }



  

}
