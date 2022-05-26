import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
/*
import { Component, OnInit } from '@angular/core';
 
@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
 constructor() { }
 
 showTable:any = false
 
 selectColumn(event:any){
 if(event.target.checked){
 this.columns.push(event.target.name)
 }
 else{
 var index = this.columns.indexOf(event.target.name)
 if(index){
 this.columns.splice(index,1)
 }
 }
 
 console.log("Yeh saara data dikhana hai" , this.columns)
 }
 
 data :any = [
 {name:"namom",
age:25,
location:"hari nagr",
email : "namom@gmail.com",
experience : 5,
bloodgroup:"A",
phone : 123456,
highestqual : "b.com",
editable : false,
editbuttontext : "Edit"
},
}]
 
 columns:any = []
 
 tables:any = []
 
 createTable(){
 this.tables.push(1)
 }
 allcolumns:any = []
 ngOnInit(): void {
 
 this.allcolumns = Object.keys(this.data[0]) 
 }
 
}
*/
