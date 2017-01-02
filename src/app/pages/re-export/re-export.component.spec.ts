/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReExportComponent } from './re-export.component';

describe('ReExportComponent', () => {
  let component: ReExportComponent;
  let fixture: ComponentFixture<ReExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
