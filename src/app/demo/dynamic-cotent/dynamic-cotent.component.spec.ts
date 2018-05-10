import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCotentComponent } from './dynamic-cotent.component';

describe('DynamicCotentComponent', () => {
  let component: DynamicCotentComponent;
  let fixture: ComponentFixture<DynamicCotentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCotentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCotentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
