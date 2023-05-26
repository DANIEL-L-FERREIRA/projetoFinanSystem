import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaixapagarPage } from './baixapagar.page';

describe('BaixapagarPage', () => {
  let component: BaixapagarPage;
  let fixture: ComponentFixture<BaixapagarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaixapagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
