import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoTagComponent } from './video-tag/video-tag.component';


const routes: Routes = [
  { path: 'video-tag', component: VideoTagComponent },
  // { path: 'library2', component: Library2Component },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }