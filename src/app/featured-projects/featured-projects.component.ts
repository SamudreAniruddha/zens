import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {

  constructor(private router: Router) { }
  CondoRedirect(){
    this.router.navigate(['./splendid-country-house']);
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
  }

}
