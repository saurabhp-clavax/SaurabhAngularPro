import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CakeListComponent } from '../cake-list/cake-list.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  object:any={email:"",password:""}
  
  constructor(private api:ApiService){ }

  signup(){
    this.api.signup(this.object).subscribe({next:(response:any)=>{console.log("Success",response)},error:(error)=>{console.log("Fail")}})
  }
  login(){
    this.api.login(this.object).subscribe({next:(response:any)=>{console.log("Success",response)},error:(error)=>{console.log("Fail")}})
 
  }
  ngOnInit(): void {
  }

}
