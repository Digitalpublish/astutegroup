import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeserviceComponent } from './backofficeservice.component';

describe('BackofficeserviceComponent', () => {
  let component: BackofficeserviceComponent;
  let fixture: ComponentFixture<BackofficeserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
