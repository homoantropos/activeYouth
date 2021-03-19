import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/interfases';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['admin', 'activities']);
    }
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(7)
      ])
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;
    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.auth.login(user);
    if (user.idToken) {
      this.loginForm.reset();
    }
    this.submitted = false;
  }
}
