/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MilesToKilometeresComponent } from './miles-to-kilometeres.component';

describe('MilesToKilometeresComponent', () => {
  let component: MilesToKilometeresComponent;
  let fixture: ComponentFixture<MilesToKilometeresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesToKilometeresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesToKilometeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
