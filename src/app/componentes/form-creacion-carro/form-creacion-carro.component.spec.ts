import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreacionCarroComponent } from './form-creacion-carro.component';

describe('FormCreacionCarroComponent', () => {
  let component: FormCreacionCarroComponent;
  let fixture: ComponentFixture<FormCreacionCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreacionCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreacionCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
