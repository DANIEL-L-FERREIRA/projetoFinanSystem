import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiporeceitaPage } from './tiporeceita.page';

describe('TiporeceitaPage', () => {
  let component: TiporeceitaPage;
  let fixture: ComponentFixture<TiporeceitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TiporeceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
