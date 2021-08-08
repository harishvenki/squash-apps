import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-form',
  templateUrl: './otp-form.component.html',
  styleUrls: ['./otp-form.component.scss']
})
export class OtpFormComponent implements OnInit {

  otp: any;

  constructor(
    private _commonService: CommonServiceService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.OTPInput();
  }

  back(){
    this._commonService.back();
  }

  OTPInput() {
    const inputs = document.querySelectorAll('#otp > .otp');
    for (let i = 0; i < inputs.length; i++) { 
      inputs[i].addEventListener('keyup', (event: any) => { 
        if (event.key==="Backspace" ) { 
          (inputs[i] as HTMLInputElement).value='';
          if (i !==0) (inputs[i - 1] as HTMLElement).focus(); 
        } else { 
          if (i===inputs.length - 1 && (inputs[i] as HTMLInputElement).value !=='' ) { 
            return true; 
          } else if (event.keyCode> 47 && event.keyCode < 58) { 
            (inputs[i] as HTMLInputElement).value=event.key;
            if (i !==inputs.length - 1)
              (inputs[i + 1] as HTMLElement).focus(); 
              event.preventDefault(); 
          } else if (event.keyCode> 64 && event.keyCode < 91) { 
            (inputs[i] as HTMLInputElement).value=String.fromCharCode(event.keyCode);
            if (i !==inputs.length - 1) (inputs[i + 1] as HTMLElement).focus(); event.preventDefault(); 
          } 
        }
        return; 
      });
    }
  }

  verifyOtp(){
    const val = document.querySelectorAll(".otp");

    this.otp = "";
    for(let i=0; i< val.length; i++ ){
      this.otp+= (val[i] as HTMLInputElement).value;
    }

    this._commonService.setValue("otp", this.otp);
    if(this.otp.length == 5){
      this._router.navigate(['success-page']);
    }

  }

}
