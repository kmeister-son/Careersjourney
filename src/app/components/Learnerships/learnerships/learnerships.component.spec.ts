import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnershipsComponent } from './learnerships.component';

describe('LearnershipsComponent', () => {
  let component: LearnershipsComponent;
  let fixture: ComponentFixture<LearnershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnershipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
