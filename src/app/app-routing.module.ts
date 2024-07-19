import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleviewComponent } from './singleview/singleview.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'single/:id', component: SingleviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
