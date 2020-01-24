import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduserviceComponent } from './eduservice.component';

describe('EduserviceComponent', () => {
  let component: EduserviceComponent;
  let fixture: ComponentFixture<EduserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
