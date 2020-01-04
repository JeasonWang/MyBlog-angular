import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijmoComponent } from './wijmo.component';

describe('WijmoComponent', () => {
  let component: WijmoComponent;
  let fixture: ComponentFixture<WijmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
