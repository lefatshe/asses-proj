import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagOnContactComponent } from './tag-on-contact.component';

describe('TagOnContactComponent', () => {
  let component: TagOnContactComponent;
  let fixture: ComponentFixture<TagOnContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagOnContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagOnContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
