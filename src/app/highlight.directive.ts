import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }
 
@HostListener('click') onClicks(){
  this.highlight("blue")
};
private highlight(action:string){
  this.elem.nativeElement.style.textHighlight=action
};

}
