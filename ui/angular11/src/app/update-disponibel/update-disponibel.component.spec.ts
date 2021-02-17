import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDisponibelComponent } from './update-disponibel.component';

describe('UpdateDisponibelComponent', () => {
  let component: UpdateDisponibelComponent;
  let fixture: ComponentFixture<UpdateDisponibelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDisponibelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDisponibelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
