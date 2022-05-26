import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
    @Input() object:any=''

    onclick() {
      // if (this.object.Eggless==="true") {
      //   document.write("You have selected eggless cake")
      // }
      if (this.object.Eggless==1) {
        this.object.Eggless=0
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
