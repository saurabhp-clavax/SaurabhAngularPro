import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CakeListComponent } from '../cake-list/cake-list.component';
import { OutputComponent } from '../output/output.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  object:any={name:"",email:"",password:""}
  // router: any;
  
  constructor(private api:ApiService,public router:Router){ }

  signup(){
    this.api.signup(this.object).subscribe({next:(response:any)=>{console.log("Success",response)},error:(error)=>{console.log("Fail")}})
  }
  login(){
    this.api.login(this.object).subscribe({next:(response:any)=>{console.log("Success",response)
    if (response.message=="Invalid Credentials") {
      this.invalid=1;
      alert("User not signed")
    }
    else{
      alert("Welcome Signing you in")
      this.router.navigate([""])
    }
  },error:(error)=>{console.log("Fail")}})
  }
invalid:any;


  
  
  ngOnInit(): void {
  }

}