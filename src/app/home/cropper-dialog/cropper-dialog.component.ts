import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData, HomeComponent } from '../home.component';
import Cropper from 'cropperjs';

@Component({
  selector: 'crp-cropper-dialog',
  templateUrl: './cropper-dialog.component.html',
  styleUrls: ['./cropper-dialog.component.css']
})
export class CropperDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HomeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
