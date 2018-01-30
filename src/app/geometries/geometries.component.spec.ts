/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeometriesComponent } from './geometries.component';

describe('GeometriesComponent', () => {
  let component: GeometriesComponent;
  let fixture: ComponentFixture<GeometriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
