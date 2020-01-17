import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainframeComponent } from './mainframe.component';

describe('MainframeComponent', () => {
  let component: MainframeComponent;
  let fixture: ComponentFixture<MainframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
