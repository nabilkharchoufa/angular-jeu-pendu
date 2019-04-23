import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PenduGameComponent } from './pendu-game.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { LoggerService, UserService } from 'src/app/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { WordService } from 'src/app/shared/services/word.service';
import { HttpClientTestingBackend } from '@angular/common/http/testing/src/backend';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';
import { KeyboardComponent } from '../../component/keyboard/keyboard.component';

describe('PenduGameComponent', () => {
  let component: PenduGameComponent;
  let fixture: ComponentFixture<PenduGameComponent>;


  beforeEach(async(() => {
    let injector: TestBed;
    let wordService: WordService;
    let helperService: HelperService;
    let httpMock: HttpTestingController;

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
        }),
      ],
      declarations: [PenduGameComponent, KeyboardComponent],
      providers: [
        {
          provide: LoggerService,
          useFactory: () => new LoggerService(),
        },
        {
          provide: HelperService,
          useFactory: () => new HelperService(),
        },
        {
          provide: UserService,
          useFactory: () => new UserService(),
        },

        WordService

      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
    injector = getTestBed();
    wordService = injector.get(WordService);
    helperService = injector.get(HelperService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenduGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
