import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteButtonComponent } from './concrete-button.component';

describe('ConcreteButtonComponent', () => {
  let component: ConcreteButtonComponent;
  let fixture: ComponentFixture<ConcreteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcreteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
