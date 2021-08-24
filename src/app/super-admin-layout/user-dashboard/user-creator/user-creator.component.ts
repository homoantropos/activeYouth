import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../../../shared/interfases';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {AlertService} from '../../../shared/services/alert.service';

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
    public auth: AuthService,
    public userService: UserService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
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
      ]),
      role: new FormControl(null, [
        Validators.required
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
      password: this.userCreatorForm.value.password,
      role: this.userCreatorForm.value.role
    };
    this.uSub = this.userService.registerUser(user)
      .subscribe(
        () => this.router.navigate(['/superadmin', 'users']),
        error => {
          this.userService.errorHandle(error);
          this.userCreatorForm.enable();
        }
      );
    if (this.userService.error$) {
      this.userService.error$.subscribe(
        message => this.alert.danger(message)
      );
    }
    this.userCreatorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }
}
