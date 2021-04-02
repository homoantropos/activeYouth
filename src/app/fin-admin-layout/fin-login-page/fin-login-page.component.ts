import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfases';
import {AuthService} from '../../admin-layout/auth/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthFinService} from '../authFin/authFin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './fin-login-page.component.html',
  styleUrls: ['./fin-login-page.component.css']
})

export class FinLoginPageComponent implements OnInit, OnDestroy {
  // @ts-ignore
  loginForm: FormGroup;
  // @ts-ignore
  aSub: Subscription;
  // @ts-ignore
  message: string;
  submitted = false;

  constructor(
    public auth: AuthFinService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['expenses', 'dashboard']);
    }
    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginFailed) {
        this.message = 'Ви повинні авторизуватися';
      }
    });
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginForm.disable();
    this.submitted = true;
    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.aSub = this.auth.login(user)
      .subscribe(
        () => this.router.navigate(['expenses', 'dashboard']),
        error => {
          this.loginForm.enable();
        }
      );
    this.submitted = false;
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
