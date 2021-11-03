import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-leadership-team',
  templateUrl: './leadership-team.component.html',
  styleUrls: ['./leadership-team.component.scss']
})
export class LeadershipTeamComponent implements OnInit {

  constructor() { }
  scrollOne() {
    console.log("scrollOne");
     $('.scrollbar-one').css({'overflow-y': 'scroll'});
     $('.scroll-hide-one').css({'display': 'none'});
  }

  scrollTwo() {
    console.log("scrollTwo");
    $('.scrollbar-two').css({'overflow-y': 'scroll'});
    $('.scroll-hide-two').css({'display': 'none'});
 }


  ngOnInit(): void {
  }

}
