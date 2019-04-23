import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService, UserService } from 'src/app/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user = new User();
  userForm: FormGroup;
  loginRequiredMessage: string;
  loginMinLengthMessage: string;

  private loginRequiredSubscription: Subscription;
  private loginMinLengthSubscription: Subscription;

  constructor(private logger: LoggerService, private formBuilder: FormBuilder,
              private translate: TranslateService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.loginRequiredSubscription = this.translate.get('login.login-required').subscribe((translation: string) => {
      this.loginRequiredMessage = translation;
    }, (error) => {
      this.logger.error(error);
    });

    this.loginMinLengthSubscription = this.translate.get('login.login-minlength').subscribe(
      (translation: string) => {
        this.loginMinLengthMessage = translation;
      },
      (error) => {
        this.logger.error(error);
      });
  }

  getErrorMessage() {
    const loginFormControl = this.userForm.get('login');
    return loginFormControl.hasError('required') ? this.loginRequiredMessage :
      loginFormControl.hasError('minlength') ? this.loginMinLengthMessage :
        '';
  }

  save(): void {
    if (this.userForm.valid) {
      this.userService.setCurrentUser(this.userForm.value.login);
      this.router.navigateByUrl('/game');

    }
  }

  ngOnDestroy(): void {
    this.loginRequiredSubscription.unsubscribe();
    this.loginMinLengthSubscription.unsubscribe();
  }

}
