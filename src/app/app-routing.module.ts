
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodecampsComponent } from './codecamps/codecamps.component';
import { CreateCodecampComponent } from './create-codecamp/create-codecamp.component';
import { UpdateCodecampComponent } from './update-codecamp/update-codecamp.component';

const routes: Routes = [
  {
    path: 'codecamps', component: CodecampsComponent
  },
  { path: '',
    redirectTo: '/codecamps',
    pathMatch: 'full'
  },
  {
    path: 'create', component: CreateCodecampComponent
  },
  {
    path: 'update/:id', component: UpdateCodecampComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
