import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BttBtnComponent } from './arrow-up-btn.component';

describe('BttBtnComponent', () => {
  let component: BttBtnComponent;
  let fixture: ComponentFixture<BttBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BttBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BttBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
