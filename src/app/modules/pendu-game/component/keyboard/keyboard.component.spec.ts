import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardComponent } from './keyboard.component';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';

describe('PenduGameComponent', () => {
  let component: KeyboardComponent;
  let fixture: ComponentFixture<KeyboardComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ KeyboardComponent ],
      providers: [ {
        provide: HelperService,
        useFactory: () => new HelperService(),
      }],
      schemas: [NO_ERRORS_SCHEMA],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
