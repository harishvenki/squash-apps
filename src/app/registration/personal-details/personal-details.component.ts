import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  gender: any = "";
  showError:any;
  personalDetails = new FormGroup({
    fullName: new FormControl('',Validators.required),
    country: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(private _commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.selectGender("MALE", 0);
  }

  selectGender(gender: string, index: any) {
    this.gender = gender;
    const genders = document.querySelectorAll(".gender");

    
    for(let i=0;i < genders.length; i++){

      if(i == index){
        (genders[i] as HTMLElement).classList.add("gender-focus");
        (genders[i] as HTMLElement).focus();
      }
      else{
        (genders[i] as HTMLElement).classList.remove("gender-focus");
        (genders[i] as HTMLElement).blur();
      }
    }
    
  }

  next(){
    this.showError = false;
    this.personalDetails.value["gender"] = this.gender;
    if(this.personalDetails.valid){
      this._commonService.setValue("personalDetails",JSON.stringify(this.personalDetails.value));
      this._commonService.next();
    } else {
      this.showError = true;
    }
  }

  back(){
    this._commonService.back();
  }
}
