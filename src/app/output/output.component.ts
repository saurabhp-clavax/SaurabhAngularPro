import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { error } from 'console';
import { NgxSpinner } from 'ngx-spinner';
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from '../api.service';
//import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})

export class OutputComponent implements OnInit {
//   arr1:any=[{
//     amount:"500",
//     type:true,
//   },
//   {
//     amount:"600",
//     type:true,
//   },
// ];
//   // if (event.cl) {
    
//   // }
//   // buttonclicked(){
//   //   if () {
      
//   //   }
//   // }
//   arr2:any=[...this.arr1.amount];
//   constructor() { }
//   clickchange(){
  
//   }
  object:any={name:"",email:"",password:""}
  
  constructor(private api:ApiService,private spinner: NgxSpinnerService){ }

  signup(){
    this.api.signup(this.object).subscribe({next:(response:any)=>{console.log("Success",response)},error:(error)=>{console.log("Fail")}})
  }
  login(){
    this.api.login(this.object).subscribe({next:(response:any)=>{console.log("Success",response)},error:(error)=>{console.log("Fail")}})
 
  }
  // ngOnInit(): void {this.spinner.show();

  //   setTimeout(() => {
  //     /** spinner ends after 5 seconds */
  //     this.spinner.hide();
  //   }, 5000);
  ngOnInit(): void {
    
  }
  }
