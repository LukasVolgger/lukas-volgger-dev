import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDownBtnComponent } from './arrow-down-btn.component';

describe('ArrowDownBtnComponent', () => {
  let component: ArrowDownBtnComponent;
  let fixture: ComponentFixture<ArrowDownBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowDownBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowDownBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
