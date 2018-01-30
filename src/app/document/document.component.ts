import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let navbarTop = this.elementRef.nativeElement.querySelector('.btn-toggle');
    navbarTop.addEventListener('click', function(t) {
      let that = t;
      return function(e) {
          e.preventDefault();
          that.elementRef.nativeElement.querySelector('#wrapper').classList.toggle('toggled');
      };
    }(this), false);
  }
}
