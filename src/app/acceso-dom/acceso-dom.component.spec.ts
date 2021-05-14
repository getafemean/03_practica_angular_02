import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoDOMComponent } from './acceso-dom.component';

describe('AccesoDOMComponent', () => {
  let component: AccesoDOMComponent;
  let fixture: ComponentFixture<AccesoDOMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoDOMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoDOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
