import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaixareceberPage } from './baixareceber.page';

describe('BaixareceberPage', () => {
  let component: BaixareceberPage;
  let fixture: ComponentFixture<BaixareceberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaixareceberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
