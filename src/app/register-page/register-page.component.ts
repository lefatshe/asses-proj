import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../shared/auth/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
      confirm: ['', Validators.required],
    })
  }

  isPasswordMatch(){
      const val = this.form.value;
      return val && val.pass && val.pass == val.confirm
  }

  register(){
    const formValue = this.form.value;

    this.authService.signUp(formValue.email, formValue.pass)
      .subscribe(
        ()=> {
          this.router.navigate(['/home']);
        },
        err => alert(err)
      );
  }

}
