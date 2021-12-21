import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaAutaComponent } from './rezervacija-auta.component';

describe('RezervacijaAutaComponent', () => {
  let component: RezervacijaAutaComponent;
  let fixture: ComponentFixture<RezervacijaAutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezervacijaAutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervacijaAutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
