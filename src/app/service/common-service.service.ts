import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  selectedTab: any = 0;
  constructor() { }


  nextStep(selected: any){
    const inputs = document.querySelectorAll(".tabs");
    const header = document.querySelectorAll(".highlight");

    for(let i=0; i< inputs.length; i++){
      console.log(i, selected);
      if(i == selected){
        console.log((header[i] as HTMLElement));
        (header[i] as HTMLElement).classList.add("highlight-color");
        console.log((header[i] as HTMLElement).classList);
        (inputs[i] as HTMLElement).style.display = "block";
      }else {
        (header[i] as HTMLElement).classList.remove("highlight-color");
        (inputs[i] as HTMLElement).style.display = "none";

      }
      if(i < selected) {
        (header[i] as HTMLElement).innerHTML = "&#10003;";
      } else {
        (header[i] as HTMLElement).innerHTML = "" + (i+1);
      }
    }
  }

  back(){
    this.selectedTab--;
    this.nextStep(this.selectedTab);
  }

  next(){
    this.selectedTab++;
    this.nextStep(this.selectedTab);
  }

  setValue(key:any, value:any){
    localStorage.setItem(key, value);
  }

}
