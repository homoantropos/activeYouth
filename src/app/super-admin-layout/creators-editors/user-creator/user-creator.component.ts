import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../../shared/interfases';
import {UserService} from '../../services/user.service';
import {AuthSuperService} from '../../authSuper/authSuper.service';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.css']
})

export class UserCreatorComponent implements OnInit, OnDestroy {
  // @ts-ignore
  userCreatorForm: FormGroup;
  // @ts-ignore
  uSub: Subscription;
  // @ts-ignore
  message: string;
  submitted = true;

  constructor(
    public auth: AuthSuperService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/superadmin', 'users', 'create']);
    }
    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginFailed) {
        this.message = 'Ви повинні авторизуватися';
      }
    });
    this.userCreatorForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      passwordCheck: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  checkPasswords(): void {
    if (this.userCreatorForm.value.passwordCheck !== this.userCreatorForm.value.password) {
      this.message = 'Паролі не співпадають';
    } else {
      this.message = '';
      this.submitted = false;
    }
  }

  onSubmit(): void {
    if (this.userCreatorForm.invalid) {
      return;
    }
    this.userCreatorForm.disable();
    const user: User = {
      email: this.userCreatorForm.value.email,
      password: this.userCreatorForm.value.password
    };
    this.uSub = this.userService.registrateUser(user)
      .subscribe(
        () => this.router.navigate(['/superadmin', 'users']),
        error => {
          this.userCreatorForm.enable();
        }
      );
    this.userCreatorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }
}
