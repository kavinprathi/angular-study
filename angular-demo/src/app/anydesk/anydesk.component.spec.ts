import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnydeskComponent } from './anydesk.component';

describe('AnydeskComponent', () => {
  let component: AnydeskComponent;
  let fixture: ComponentFixture<AnydeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnydeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnydeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
