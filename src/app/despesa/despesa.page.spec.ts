import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DespesaPage } from './despesa.page';

describe('DespesaPage', () => {
  let component: DespesaPage;
  let fixture: ComponentFixture<DespesaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DespesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
