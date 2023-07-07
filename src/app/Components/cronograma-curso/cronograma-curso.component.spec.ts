import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaCursoComponent } from './cronograma-curso.component';

describe('CronogramaCursoComponent', () => {
  let component: CronogramaCursoComponent;
  let fixture: ComponentFixture<CronogramaCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CronogramaCursoComponent]
    });
    fixture = TestBed.createComponent(CronogramaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
