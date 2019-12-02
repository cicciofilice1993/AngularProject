import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteTableComponent } from './concrete-table.component';

describe('ConcreteTableComponent', () => {
  let component: ConcreteTableComponent;
  let fixture: ComponentFixture<ConcreteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcreteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
