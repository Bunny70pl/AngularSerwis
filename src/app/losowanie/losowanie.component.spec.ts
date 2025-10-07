import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosowanieComponent } from './losowanie.component';

describe('LosowanieComponent', () => {
  let component: LosowanieComponent;
  let fixture: ComponentFixture<LosowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LosowanieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LosowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
