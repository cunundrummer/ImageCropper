import { Component, ElementRef, Inject, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData, HomeComponent } from '../home.component';
import Cropper from 'cropperjs';

@Component({
  selector: 'crp-cropper-dialog',
  templateUrl: './cropper-dialog.component.html',
  styleUrls: ['./cropper-dialog.component.css']
})
export class CropperDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('sourceImageEl') imgSourceEl: ElementRef<HTMLImageElement>;

  cropper: Cropper;
  isCropped: Boolean = false;
  cropperData: {
    imageData: any;
    canvasData: any;
  };

  constructor(public dialogRef: MatDialogRef<HomeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    console.log(this.data.image);
  }

  ngAfterViewInit() {
    this.openCropper();
    this.cropperData = {
      imageData: this.cropper.getImageData(),
      canvasData: this.cropper.getCanvasData()
    }
  }

  openCropper() {
    this.cropper = new Cropper(this.imgSourceEl.nativeElement, {
      aspectRatio: NaN,
      viewMode: 1,
      ready() {
        console.log('Ready!');
      }
    });

    this.isCropped = false;
  }

  crop() {
    console.log('cropping image...');
    this.imgSourceEl.nativeElement.src = this.cropper.getCroppedCanvas().toDataURL();
    console.log(this.cropper.getImageData());
    this.isCropped = true;
    this.cropper.destroy();
    this.cropper = null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  rotate(direction: 'right' | 'left') {
    switch (direction) {
      case 'right':
        this.cropper.rotate(90);
        break;
      case 'left':
        this.cropper.rotate(-90);
        break;
      default:
        break;
    }
  }

  save() {
    this.dialogRef.close(this.imgSourceEl);
  }
}
