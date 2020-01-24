import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtcollectionserviceComponent } from './debtcollectionservice.component';

describe('DebtcollectionserviceComponent', () => {
  let component: DebtcollectionserviceComponent;
  let fixture: ComponentFixture<DebtcollectionserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtcollectionserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtcollectionserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
