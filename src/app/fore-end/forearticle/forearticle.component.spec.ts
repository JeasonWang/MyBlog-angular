import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForearticleComponent } from './forearticle.component';

describe('ForearticleComponent', () => {
  let component: ForearticleComponent;
  let fixture: ComponentFixture<ForearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
