import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../shared/auth/auth-service.service";
import {Router} from "@angular/router";
import {AngularFire, AuthMethods, AuthProviders} from "angularfire2";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  errorString: string;

  constructor(private af: AngularFire,
              private fb: FormBuilder,
              private authService: AuthServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
    })
  }

  ifError(error) {
    this.errorString = error.message;
  }

  loginFb() {

    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    })
      .then(
        () => {
          this.router.navigate(['/contacts']);
        },
        err => this.ifError(err)
      );
  }


  login() {
    const formValue = this.form.value;

    this.authService.loginUser(formValue.email, formValue.pass)
      .subscribe(
        () => {
          this.router.navigate(['/contacts']);
        },
        err => this.ifError(err)
      );
  }

}§
