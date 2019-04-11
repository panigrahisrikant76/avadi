import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLeftSideComponent } from './customer-left-side.component';

describe('CustomerLeftSideComponent', () => {
  let component: CustomerLeftSideComponent;
  let fixture: ComponentFixture<CustomerLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
