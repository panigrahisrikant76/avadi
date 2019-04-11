import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {
   data:any;
   constructor(private route:Router){
    
  }

  ngOnInit() {
    
    this.data = JSON.parse(localStorage.getItem('currentUser'));

  }

    logout(){
    localStorage.removeItem('currentUser');
    this.route.navigate(['/customer/login']);
  }

}
