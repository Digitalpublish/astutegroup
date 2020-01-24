import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appToggle]',
  host : {
    '(mouseover)':'deactive()',
    '(mouseout)':'isactive()'
  }
})
export class ToggleDirective {

  constructor(private eleref:ElementRef, private ren:Renderer) {
    //this.ren.setElementStyle(this.eleref.nativeElement, 'opacity', '.5');
    this.ren.setElementStyle(this.eleref.nativeElement, 'border-color', 'transparent');
    this.ren.setElementStyle(this.eleref.nativeElement, 'border-radius', '0');
   }
   isactive(){
    //this.ren.setElementStyle(this.eleref.nativeElement, 'opacity', '.5');
    this.ren.setElementStyle(this.eleref.nativeElement, 'border-color', 'transparent');
    this.ren.setElementStyle(this.eleref.nativeElement, 'border-radius', '0');
   }
   deactive(){
    //this.ren.setElementStyle(this.eleref.nativeElement, 'opacity', '1');
    this.ren.setElementStyle(this.eleref.nativeElement, 'border', 'solid 1px #007bff');
    this.ren.setElementStyle(this.eleref.nativeElement, 'border-radius', '7px');
   }
}
