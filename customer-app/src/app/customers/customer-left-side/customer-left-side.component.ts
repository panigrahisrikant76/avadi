import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-customer-left-side',
  templateUrl: './customer-left-side.component.html',
  styleUrls: ['./customer-left-side.component.css']
})
export class CustomerLeftSideComponent implements OnInit {
 data:any;
   constructor(private route:Router){}

  ngOnInit() {
     this.data = JSON.parse(localStorage.getItem('currentUser'));
  }

}
