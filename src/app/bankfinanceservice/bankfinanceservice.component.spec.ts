import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankfinanceserviceComponent } from './bankfinanceservice.component';

describe('BankfinanceserviceComponent', () => {
  let component: BankfinanceserviceComponent;
  let fixture: ComponentFixture<BankfinanceserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankfinanceserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankfinanceserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
