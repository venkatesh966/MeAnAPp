import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el:ElementRef) { }

  @Input()
  appCustom:number;

  @HostListener('click') onclick()
  {
    if(this.appCustom>3.5)
    this.el.nativeElement.style.background='lightblue';
    else
    this.el.nativeElement.style.background='lightgreen';
  }





}
