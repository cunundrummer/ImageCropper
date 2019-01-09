import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
