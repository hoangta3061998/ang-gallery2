import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider.component';
import { ImageSlideComponent } from './image-slide/image-slide.component';



@NgModule({
  declarations: [ImageSliderComponent, ImageSlideComponent],
  exports: [
    ImageSlideComponent,
    ImageSliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageSliderModule { }
