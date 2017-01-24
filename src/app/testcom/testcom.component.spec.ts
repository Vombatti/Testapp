/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestcomComponent } from './testcom.component';

describe('TestcomComponent', () => {
  let component: TestcomComponent;
  let fixture: ComponentFixture<TestcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
