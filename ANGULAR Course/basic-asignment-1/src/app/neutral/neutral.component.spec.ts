import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralComponent } from './neutral.component';

describe('NeutralComponent', () => {
  let component: NeutralComponent;
  let fixture: ComponentFixture<NeutralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeutralComponent]
    });
    fixture = TestBed.createComponent(NeutralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
