import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocdetailsComponent } from './locdetails.component';

describe('LocdetailsComponent', () => {
  let component: LocdetailsComponent;
  let fixture: ComponentFixture<LocdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
