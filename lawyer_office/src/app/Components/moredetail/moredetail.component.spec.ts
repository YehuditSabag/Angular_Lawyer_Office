import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoredetailComponent } from './moredetail.component';

describe('MoredetailComponent', () => {
  let component: MoredetailComponent;
  let fixture: ComponentFixture<MoredetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoredetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
