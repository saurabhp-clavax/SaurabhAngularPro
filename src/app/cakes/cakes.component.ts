import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CakeListComponent } from '../cake-list/cake-list.component';
@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  constructor(private display:ApiService) {
    this.display.cakeapi().subscribe({next:(response:any)=>{
      console.log(response)
      this.arr=response.data
      console.log(this.arr)
    }})
   }

   arr=[]

  ngOnInit(): void {
  }

}
