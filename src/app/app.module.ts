import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import the HttpClientModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
