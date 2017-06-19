import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetDisplayComponent } from './snippet-display.component';

describe('SnippetDisplayComponent', () => {
  let component: SnippetDisplayComponent;
  let fixture: ComponentFixture<SnippetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
