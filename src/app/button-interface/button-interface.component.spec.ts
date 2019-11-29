import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInterfaceComponent } from './button-interface.component';

describe('ButtonInterfaceComponent', () => {
  let component: ButtonInterfaceComponent;
  let fixture: ComponentFixture<ButtonInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
