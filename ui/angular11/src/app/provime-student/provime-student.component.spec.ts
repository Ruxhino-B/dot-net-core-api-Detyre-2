import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvimeStudentComponent } from './provime-student.component';

describe('ProvimeStudentComponent', () => {
  let component: ProvimeStudentComponent;
  let fixture: ComponentFixture<ProvimeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvimeStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvimeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
