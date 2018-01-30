/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TexturesComponent } from './textures.component';

describe('TexturesComponent', () => {
  let component: TexturesComponent;
  let fixture: ComponentFixture<TexturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
