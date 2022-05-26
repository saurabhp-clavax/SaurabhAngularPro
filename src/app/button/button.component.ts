import { SelectorMatcher } from '@angular/compiler';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }
 
  object:any={
    c_name:"",
    c_price:"",
    c_size:"",
    c_eggless:"",
    c_occassion:"",

  }
  arr:any=[];
  minprice:any=0
  maxprice:any=0
 

  console()
  {
    var temp={...this.object}
    this.arr.push(temp)
    console.log(this.arr)  
  }
  sortlowtohigh()
  {
    var temp2={...this.object}
    console.log(this.arr.sort((a:any, b:any) => (a.color > b.color) ? 1 : -1))
  }
  sorthightolow()
  {
    var temp2={...this.object}
    console.log(this.arr.sort(( b:any,a:any) => (b.color > a.color) ? 1 : -1))
  }
 
  occassionbirthday()
  {
    this.arr.forEach((element:any) => {
      if (element.c_occassion=="Birthday") {
           console.log(element)
      }
    });
  }
  occassionanniversary()
  {
    this.arr.forEach((element:any) => {
      if (element.c_occassion=="Anniversary") {
           console.log(element)
      }
    });
  }
  occassionparty()
  {
    this.arr.forEach((element:any) => {
      if (element.c_occassion=="Party") {
           console.log(element)
      }
    });
  }
  occassionall()
  {
    this.arr.forEach((element:any)=>{
      console.log(element)
    })
  }
  //Search Functionality
  // search(){
  //   this.array=this.array2.filter((each:any)=>{
  //     return each.propertyofarray2.toLowercase().includes(this.searchtext.toLowercase())
  //   })
  // }
  ngOnInit(): void {
  }
}

