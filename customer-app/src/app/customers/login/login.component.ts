import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthenticationService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticationService]
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  constructor( private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

  ngOnInit() {
     this.body.classList.add('hold-transition');
    this.body.classList.add('login-page');
     this.body.classList.add('skin-blue');
      this.body.classList.add('sidebar-mini');

     this.loginForm = this.formBuilder.group({
            username: ['ezee', Validators.required],
            password: ['lipsrik', Validators.required]
        });
       
  }
   // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

     onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
       
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                data => {
                   this.loading = false;
                   
                   this.router.navigate(['customer/dashboard']);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
    }

}

