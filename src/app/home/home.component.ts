import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CropperDialogComponent } from './cropper-dialog/cropper-dialog.component';

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
  image: string;
}

@Component({
  selector: 'crp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sourceImageEl') imgSourceEl: ElementRef<HTMLImageElement>;

  sourceImage = './../assets/cat_pic640_360_nofilter.jpg';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    console.log('Opening dialog...');

    const dialogRef = this.dialog.open(CropperDialogComponent, {
      width: this.imgSourceEl.nativeElement.width + '100px',
      height: this.imgSourceEl.nativeElement.height + '50px',
      data: {
        name: 'imageName',
        image: this.sourceImage
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.imgSourceEl.nativeElement.src = result.nativeElement.src;
    });

  }
}
