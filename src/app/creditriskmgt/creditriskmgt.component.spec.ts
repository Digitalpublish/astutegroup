import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditriskmgtComponent } from './creditriskmgt.component';

describe('CreditriskmgtComponent', () => {
  let component: CreditriskmgtComponent;
  let fixture: ComponentFixture<CreditriskmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditriskmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditriskmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
