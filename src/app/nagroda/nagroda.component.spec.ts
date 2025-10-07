import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagrodaComponent } from './nagroda.component';

describe('NagrodaComponent', () => {
  let component: NagrodaComponent;
  let fixture: ComponentFixture<NagrodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NagrodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagrodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
