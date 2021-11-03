import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss']
})
export class EmiCalculatorComponent implements OnInit {
  loanAmount: number = 0;
  Tenure:number = 0;
  InterestRate:number = 0;
  total = 0;
  totalPayment : any;
  emi : any;
  pAmount : any;
  interstPayble : any;



  calculateEmi(lamt: number,ten: number,irate: number){

    var principalAmt = lamt * 10000000;
    var month = ten * 12;
    var intrest = irate / 1200;
    this.emi = principalAmt * intrest / (1 - (Math.pow(1/(1 + intrest), month)));
    this.totalPayment =  this.emi * month;
    this.interstPayble = this.totalPayment - principalAmt;
    this.interstPayble =  this.interstPayble.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
    this.emi =  this.emi.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
      // console.log("total after: "+  this.emi.toFixed(2));
        this.totalPayment = this.totalPayment.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
    // console.log("payment: "+  this.totalPayment.toFixed(2));
    this.pAmount = principalAmt.toFixed(0).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');

  if(this.totalPayment == "NaN" && this.emi == "Infinity" || this.emi == "NaN"  && this.pAmount == "NaN" &&  this.interstPayble == "NaN"){
    console.log("comming");
    this.totalPayment = 0.00;
    this.emi = 0.00;
    this.pAmount = 0.00;
    this.interstPayble = 0.00;
  }

  }

  options: Options = {

    ceil: 2.5,
    step: 0.5,
    floor: 0,
    showTicksValues: true,
    translate: (loanAmount: number): string => {

      return  loanAmount +' Cr';

    },


    stepsArray: [
      {value: 0, legend: ''},

      {value: 0.5, legend: ''},

      {value: 1, legend: ''},

      {value: 1.5, legend: ''},

      {value: 2, legend: ''},
      {value: 2.5, legend: ''}
    ],
    showSelectionBar: true,
    showTicks: true,

    getSelectionBarColor: (loanAmount: number): string => {
      return '#77b82b';


    },
    getPointerColor: (loanAmount: number): string => {
      return '#ffffff';
  },






    getTickColor: (loanAmount: number): string => {
      if (loanAmount < 1) {
        return 'red';

      }
      if (loanAmount < 1.5) {
        return 'orange';
      }
      if (loanAmount < 2.5) {
        return 'yellow';
      }
      return '#2AE02A';
    }

  };
  options2: Options = {
    ceil: 30,
    step: 5,
    floor: 0,
    showTicksValues: true,
    translate: (Tenure: number): string => {

      return  Tenure +' Yrs';

    },


    showSelectionBar: true,
    showTicks: true,

    getSelectionBarColor: (Tenure: number): string => {
      return '#77b82b';


    },
    getPointerColor: (Tenure: number): string => {
      return '#ffffff';
  },






    getTickColor: (Tenure: number): string => {
      if (Tenure < 1) {
        return 'red';

      }
      if (Tenure < 1.5) {
        return 'orange';
      }
      if (Tenure < 2.5) {
        return 'yellow';
      }
      return '#2AE02A';
    }

  };

  options3: Options = {
    ceil: 15.00,
    step: .50,
    floor: 8.50,
    // showTicksValues: true,
    translate: (InterestRate: number): string => {

      return  InterestRate +' %';

    },


    showSelectionBar: true,
    // showTicks: true,

    getSelectionBarColor: (InterestRate: number): string => {
      return '#77b82b';


    },
    getPointerColor: (InterestRate: number): string => {
      return '#ffffff';
  },






    getTickColor: (InterestRate: number): string => {
      if (InterestRate < 1) {
        return 'red';

      }
      if (InterestRate < 1.5) {
        return 'orange';
      }
      if (InterestRate < 2.5) {
        return 'yellow';
      }
      return '#2AE02A';
    }

  };

  constructor() { }

  ngOnInit(): void {
  }

}
