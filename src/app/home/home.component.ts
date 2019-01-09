import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Cropper from 'cropperjs';

enum Cropped_State {
  CROPPED,
  NOT_CROPPED,
  PENDING
}

interface ImageList {
  numImages: number;
  origImgSource?: ElementRef<HTMLImageElement>;
  croppedState?: Cropped_State;
  imgEditsList?: Array<ElementRef<HTMLImageElement>>; // used for redo/undos
}

@Component({
  selector: 'crp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sourceImageEl') imgSourceEl: ElementRef<HTMLImageElement>;

  cropper: Cropper;
  sourceImage = './../assets/cat_pic640_360_nofilter.jpg';

  constructor() { }

  ngOnInit() {
  }

  openCropper() {
    this.cropper = new Cropper(this.imgSourceEl.nativeElement, {
      aspectRatio: 16 / 9,
      ready() {
        console.log('Ready!');
      }
    });
  }

  cropImage() {
    // console.log(imgurl);

    this.imgSourceEl.nativeElement.src = this.cropper.getCroppedCanvas().toDataURL();
    console.log(this.cropper.getImageData());
    this.cropper.destroy();
  }

}
