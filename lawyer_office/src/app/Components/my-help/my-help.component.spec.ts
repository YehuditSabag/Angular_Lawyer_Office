import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelpComponent } from './my-help.component';

describe('MyHelpComponent', () => {
  let component: MyHelpComponent;
  let fixture: ComponentFixture<MyHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
