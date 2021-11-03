import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#news-carousel-example').on('slide.bs.carousel', function (e:any) {

        /*
            CC 2.0 License Iatek LLC 2018
            Attribution required
        */
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.news-carousel-item').length;

        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('.news-carousel-item').eq(i).appendTo('.news-carousel-inner');
                }
                else {
                    $('.news-carousel-item').eq(0).appendTo('.news-carousel-inner');
                }
            }
        }
    });

    });

  }


}
