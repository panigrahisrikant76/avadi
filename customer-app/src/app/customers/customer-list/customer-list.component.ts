import { Component, OnInit } from '@angular/core';
import {CustomerListService} from './customer-list.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
   providers:[CustomerListService]
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
