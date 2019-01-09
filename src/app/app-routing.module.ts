import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CropperDialogComponent } from './home/cropper-dialog/cropper-dialog.component';
import { MaterialModule } from './material.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  exports: [
    RouterModule,
    MaterialModule
  ],
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    CropperDialogComponent
  ],
  entryComponents: [
    CropperDialogComponent
  ]
})
export class AppRoutingModule { }
