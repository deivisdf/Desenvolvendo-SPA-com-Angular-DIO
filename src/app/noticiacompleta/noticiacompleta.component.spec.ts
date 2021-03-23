import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiacompletaComponent } from './noticiacompleta.component';

describe('NoticiacompletaComponent', () => {
  let component: NoticiacompletaComponent;
  let fixture: ComponentFixture<NoticiacompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiacompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiacompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
