import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipodespesaPage } from './tipodespesa.page';

describe('TipodespesaPage', () => {
  let component: TipodespesaPage;
  let fixture: ComponentFixture<TipodespesaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipodespesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
