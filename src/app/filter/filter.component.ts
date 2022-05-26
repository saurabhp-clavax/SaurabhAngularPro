import { Component, Input, OnInit } from '@angular/core';
import { CakeListComponent } from '../cake-list/cake-list.component';
import { MyserviceService } from '../myservice.service';
import { ButtonComponent } from '../button/button.component';
import { Injectable } from '@angular/core'; 
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
@Input() object:any=" "
  constructor() { }

  ngOnInit(): void {
  }

}
