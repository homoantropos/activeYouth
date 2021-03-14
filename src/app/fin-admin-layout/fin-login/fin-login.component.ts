import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../shared/interfases';
import {AuthFinService} from '../authFin/authFin.service';

@Component({
  selector: 'app-fin-login',
  templateUrl: './fin-login.component.html',
  styleUrls: ['./fin-login.component.css']
})
export class FinLoginComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private auth: AuthFinService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated) {
      this.router.navigate(['admin', 'dashboard']);
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
