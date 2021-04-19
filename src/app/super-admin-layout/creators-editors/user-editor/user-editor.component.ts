import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../../shared/interfases';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit, OnDestroy {
  // @ts-ignore
  userEditorForm: FormGroup;
  // @ts-ignore
  uSub: Subscription;
  // @ts-ignore
  message: string;
  // @ts-ignore
  user: User;
  // @ts-ignore
  userId: number;
  submitted = true;

  constructor(
    public auth: AuthService,
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.userId = (params.id) as number);
    this.userService.getOneUserById(this.userId).subscribe(user => {
      this.user = user;
      this.userEditorForm = new FormGroup({
        email: new FormControl(this.user.email, [
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
        role: new FormControl(this.user.role, [
          Validators.required
        ])
      });
    });
  }

  checkPasswords(): void {
    if (this.userEditorForm.value.passwordCheck !== this.userEditorForm.value.password) {
      this.message = 'Паролі не співпадають';
    } else {
      this.message = '';
      this.submitted = false;
    }
  }

  onSubmit(): void {
    if (this.userEditorForm.invalid) {
      return;
    }
    this.userEditorForm.disable();
    const user: User = {
      email: this.userEditorForm.value.email,
      password: this.userEditorForm.value.password,
      role: this.userEditorForm.value.role,
      person_id: this.userId
    };
    this.uSub = this.userService.updateUser(user)
      .subscribe(
        resuser => {
          alert(resuser.message);
          this.router.navigate(['/superadmin', 'users']);
        },
        error => {
          this.userService.errorHandle(error);
          this.userEditorForm.enable();
        }
      );
    this.userEditorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }
}
