import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervisanaAutaComponent } from './rezervisana-auta.component';

describe('RezervisanaAutaComponent', () => {
  let component: RezervisanaAutaComponent;
  let fixture: ComponentFixture<RezervisanaAutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezervisanaAutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervisanaAutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
