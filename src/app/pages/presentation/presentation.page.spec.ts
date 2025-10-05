import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationPage } from './presentation.page';

describe('PresentacaoPage', () => {
  let component: PresentationPage;
  let fixture: ComponentFixture<PresentationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
