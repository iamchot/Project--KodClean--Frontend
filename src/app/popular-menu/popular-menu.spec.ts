import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMenu } from './popular-menu';

describe('PopularMenu', () => {
  let component: PopularMenu;
  let fixture: ComponentFixture<PopularMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
