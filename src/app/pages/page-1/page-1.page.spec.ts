import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageAPage } from './page-1.page';

describe('PageAPage', () => {
  let component: PageAPage;
  let fixture: ComponentFixture<PageAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
