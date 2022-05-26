import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {
  // object1={
  //   name:"Chocolate",
  //   price:799,
  //   Eggless:1,
  //   img:"assets/2.jpg",
  //   prod_id:'001'
  // }
  // object2={
  //   name:"Vanilla",
  //   price:699,
  //   Eggless:0,    
  //   img:"assets/cake2.webp",
  //   prod_id:'002'
  // }
  // object3={
  //   name:"Strawberry",
  //   price:1499,
  //   Eggless:1,
  //   img:"assets/cake1.jpg",
  //   prod_id:'003'
  // }
  // object4={
  //   name:"Red Velvet",
  //   price:1999,
  //   Eggless:0,
  //   img:"assets/cake3.jpg",
  //   prod_id:'004'
  // }
  // object5={
  //   name:"Dark Fantasy",
  //   price:799,
  //   Eggless:1,
  //   img:"assets/df.avif",
  //   prod_id:'005'
  // }
  // object7={
  //   name:"Mango Magic",
  //   price:1199,
  //   Eggless:0,
  //   img:"assets/man1.jpg",
  //   prod_id:'006'
  // }
  // object8={
  //   name:"ButterScotch",
  //   price:799,
  //   Eggless:1,
  //   img:"assets/but1.jpg",
  //   prod_id:'007'
  // }
  // object9={
  //   name:"Alphanso Mango",
  //   price:999,
  //   Eggless:1,
  //   img:"assets/man3.jpg",
  //   prod_id:'008'
  // }
  // object10={
  //   name:"Mango Heart",
  //   price:1499,
  //   Eggless:0,
  //   img:"assets/man2.jpg",
  //   prod_id:'009'
  // }
  // object11={
  //   name:"Butterscotch King",
  //   price:2999,
  //   Eggless:1,
  //   img:"assets/but2.jpg",
  //   prod_id:'010'
  // }
 @Input() data:any="";
  object6="eggless"
  public onclick() {
  
  }
constructor(){}
  ngOnInit(): void {
  }

}
