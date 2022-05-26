import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeComponent } from './cake/cake.component';
import { CustomerfeedbackComponent } from './customerfeedback/customerfeedback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OutputComponent } from './output/output.component';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"API",component:SearchComponent},
  {path:"sign-in",component:SigninComponent},
  {path:"customer-feedback",component:CustomerfeedbackComponent},
  {path:"filter",component:OutputComponent},
  {path:"",component:HomepageComponent},
  {path:"sign-up",component:SignupComponent},
  {path:"details/:cakeid",component:CakeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
