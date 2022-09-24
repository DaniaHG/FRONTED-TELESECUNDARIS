import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisalumnoComponent } from './lisalumno.component';

describe('LisalumnoComponent', () => {
  let component: LisalumnoComponent;
  let fixture: ComponentFixture<LisalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisalumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
