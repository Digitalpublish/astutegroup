import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotechComponent } from './infotech.component';

describe('InfotechComponent', () => {
  let component: InfotechComponent;
  let fixture: ComponentFixture<InfotechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfotechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfotechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
