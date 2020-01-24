import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrouselbarComponent } from './crouselbar.component';

describe('CrouselbarComponent', () => {
  let component: CrouselbarComponent;
  let fixture: ComponentFixture<CrouselbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrouselbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrouselbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
