import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { LoggerService, UserService } from 'src/app/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientTestingBackend } from '@angular/common/http/testing/src/backend';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [LoginComponent],
      providers: [
        {
          provide: LoggerService,
          useFactory: () => new LoggerService(),
        },
        {
          provide: FormBuilder,
          useFactory: () => new FormBuilder(),
        },
        {
          provide: UserService,
          useFactory: () => new UserService(),
        }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
