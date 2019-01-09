import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material';
import { CropperDialogComponent } from './cropper-dialog/cropper-dialog.component';
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

export interface DialogData {
  name: string;
  image: ElementRef<HTMLImageElement>
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

  constructor(public dialog: MatDialog) { }

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

  openDialog() {
    console.log('Opening dialog...');

    const dialogRef = this.dialog.open(CropperDialogComponent, {
      width: '400px',
      data: {
        name: 'imageName',
        image: this.imgSourceEl.nativeElement
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

  }
}
