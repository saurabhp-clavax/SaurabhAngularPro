import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarousalComponent } from './carousal/carousal.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeComponent } from './cake/cake.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { TablecomponentComponent } from './tablecomponent/tablecomponent.component';
import { SearchComponent } from './search/search.component';
import { OutputComponent } from './output/output.component';
import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import {HttpClientModule} from '@angular/common/http'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CustomerfeedbackComponent } from './customerfeedback/customerfeedback.component';
import { SignupComponent } from './signup/signup.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CakesComponent } from './cakes/cakes.component';






@NgModule({
imports: [
HttpClientModule,
CommonModule,
BrowserAnimationsModule, // required animations module
ToastrModule.forRoot() // ToastrModule added
],
bootstrap: [],
declarations: [
  HeaderComponent,
],
})
class MainModule {}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CarousalComponent,
    CakeListComponent,
    CakeComponent,
    ButtonComponent,
    TablecomponentComponent,
    SearchComponent,
    OutputComponent,
    SigninComponent,
    SignupComponent,
    CakesComponent,
    
  ],
  imports: [
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })

  ],
  providers: [],
  bootstrap: [TablecomponentComponent]
})
export class AppModule { }
