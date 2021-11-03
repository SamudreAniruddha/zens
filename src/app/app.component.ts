import { Component } from '@angular/core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo';
  isShown:boolean=false;
  navbarOpen = false;
  faPhoneAlt = faPhoneAlt;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
//   ngOnInit(): void {
//     $(document).ready(function() {

//       $('a[class="nav-link smooth-scroll-control"]').on('click', function(event:any) {

//         var target = $(this.getAttribute('href'));

//         if( target.length ) {
//             event.preventDefault();
//             $('html, body').stop().animate({
//                 scrollTop: target.offset().top
//             }, 700);
//         }

//     });

//     });

//     $(document).ready(function(){


//     window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar-main");
// var compressNav = navbar.offsetTop;


// function myFunction() {
//   if (window.pageYOffset >= compressNav) {
//     navbar.classList.add("compress-nav")
//   }
//   if (window.pageYOffset <= compressNav){
//     navbar.classList.remove("compress-nav");
//   }
// }
//     });

//   }
}
