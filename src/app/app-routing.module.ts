import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'form', component: FormComponent },
    { path: 'about', component: AboutComponent},
    { path: 'result', component: ResultComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
