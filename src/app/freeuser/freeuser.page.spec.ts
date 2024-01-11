import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FreeuserPage } from './freeuser.page';

describe('FreeuserPage', () => {
  let component: FreeuserPage;
  let fixture: ComponentFixture<FreeuserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FreeuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
