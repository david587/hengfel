import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GitComponent } from './git/git.component';
import { HengerComponent } from './henger/henger.component';

const routes: Routes = [
  {path:"henger", component: HengerComponent},
  {path:"git", component: GitComponent},
  {path:"about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
