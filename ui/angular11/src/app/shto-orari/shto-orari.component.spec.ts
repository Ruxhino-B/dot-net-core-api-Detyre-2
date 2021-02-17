import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShtoOrariComponent } from './shto-orari.component';

describe('ShtoOrariComponent', () => {
  let component: ShtoOrariComponent;
  let fixture: ComponentFixture<ShtoOrariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShtoOrariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShtoOrariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
