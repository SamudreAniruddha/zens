import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";


@Component({
  selector: 'app-loan-registration',
  templateUrl: './loan-registration.component.html',
  styleUrls: ['./loan-registration.component.scss']
})
export class LoanRegistrationComponent implements OnInit {

  private formValidation: FormGroup | undefined;
  email_address: string| undefined;
  name: string| undefined;
  present_address: string| undefined;
  contact_no: number| undefined;
  dcm_date: string | undefined;
    result: any;
  display = 'none';
  form: FormGroup;
  constructor(private http: HttpClient, public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      personalArmyno: ['', Validators.required],
      rankAndname: ['', Validators.required],
      presentAddress: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(/^[0][1-9]\d{9}$|^[1-9]\d{9}$/g)]],
      dcmDate: ['', Validators.required],
    });



  }
  submit(email_address: any, personal_armyno: any, name: any,dcm_date: any) {
    console.log("data : " + this.submit);

    const loanRegistrationObj = {
      email_address: this.email_address,
      name: this.name,
      present_address: this.present_address,
      contact_no: this.contact_no,
      dcm_date: this.dcm_date,

    };

    }
  // showSpinner() {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 3000);
  // }
  onSubmit(){
    alert("Thank You For Submit The Form" );

  }

  ngOnInit() {

  }

}
