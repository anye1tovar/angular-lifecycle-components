import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterExampleComponent } from './couter-example.component';

describe('CouterExampleComponent', () => {
  let component: CouterExampleComponent;
  let fixture: ComponentFixture<CouterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouterExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
