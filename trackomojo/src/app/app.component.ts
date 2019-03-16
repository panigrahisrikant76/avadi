import { Component ,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  IsSubmitted = false
  loginForm : FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required])
  });
  ngOnInit(){

  }
  login(){
  this.IsSubmitted = true;    
    if(this.loginForm.valid){
      console.log('Its ok request api now');
      console.log(JSON.stringify(this.loginForm.value));
    }else{
      console.log('Invalid');
      return false;
    }
  }
}
