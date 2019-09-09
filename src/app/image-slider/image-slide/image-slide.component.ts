import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss']
})
export class ImageSlideComponent implements OnInit {
  // @ts-ignore
  @ViewChild('tmpl') template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
