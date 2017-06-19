import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnContactSearchComponent } from './on-contact-search.component';

describe('OnContactSearchComponent', () => {
  let component: OnContactSearchComponent;
  let fixture: ComponentFixture<OnContactSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnContactSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnContactSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
