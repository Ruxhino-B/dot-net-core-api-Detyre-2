import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvimePedagogComponent } from './provime-pedagog.component';

describe('ProvimePedagogComponent', () => {
  let component: ProvimePedagogComponent;
  let fixture: ComponentFixture<ProvimePedagogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvimePedagogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvimePedagogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
