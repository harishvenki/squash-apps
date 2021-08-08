import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private _commonService: CommonServiceService) { }

  companyDetails = new FormGroup({
    companyName: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
    terms: new FormControl('', Validators.required)
  });
  showError: any;

  ngOnInit(): void {
  }

  next(){
    this.showError = false;
    if(this.companyDetails.valid){
      this._commonService.setValue("companyDetails",JSON.stringify(this.companyDetails.value));
      this._commonService.next();
    } else {
      this.showError = true;
    }
  }

  back(){
    this._commonService.back();
  }

}
