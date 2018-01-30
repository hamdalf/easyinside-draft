/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DingsComponent } from './dings.component';

describe('DingsComponent', () => {
  let component: DingsComponent;
  let fixture: ComponentFixture<DingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
