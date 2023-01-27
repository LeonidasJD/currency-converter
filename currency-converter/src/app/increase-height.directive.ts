import { Directive, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appIncreaseHeight]'
})
export class IncreaseHeightDirective {

  constructor() { }



  @HostListener('click') increase(){
    let div = document.getElementById("main-div");
    let transparancy  = document.getElementById("background-transparency");
    console.log(div);

    if(div?.offsetWidth !== undefined && transparancy?.offsetWidth !== undefined && div.offsetWidth <= 767){
      div.style.height = "1230px";
      transparancy.style.height = "1230px";
    }




  }

}
