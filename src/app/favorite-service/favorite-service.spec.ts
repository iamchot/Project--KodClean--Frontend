import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteService } from './favorite-service';

describe('FavoriteService', () => {
  let component: FavoriteService;
  let fixture: ComponentFixture<FavoriteService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
