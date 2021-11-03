import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  result: any;
  display = 'none';
  constructor(private router: Router) { }

  openModal() {

    this.display = 'block';

  }

  onCloseHandled() {

    this.display = 'none';

  }

  legalAssurance(){

    this.router.navigate(['./services#legalInsurance']);
    window.scrollTo(0, 700);
  }
  qualityAssurance(){
         this.router.navigate(['./services']);
      window.scrollTo(0, 1400);

  }

  interiorDesign(){
    this.router.navigate(['./services']);
 window.scrollTo(0, 1800);

}

homeCustomization(){
  this.router.navigate(['./services']);
window.scrollTo(0, 2400);

}
fillhereRedirect(){
  this.router.navigate(['./loan-registration']);
  window.scrollTo(0, 0);
}

  ngOnInit(): void {
  }

}
