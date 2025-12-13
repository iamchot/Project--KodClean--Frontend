import { ComponentFixture, TestBed } from '@angular/core/testing';

// 1. แก้ตรงนี้: จาก Hero เป็น HeroComponent
import { HeroComponent } from './hero';

// 2. แก้ตรงนี้: (แก้ชื่อ describe เพื่อความชัดเจน)
describe('HeroComponent', () => {
  // 3. แก้ตรงนี้:
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 4. แก้ตรงนี้:
      imports: [HeroComponent]
    })
    .compileComponents();

    // 5. แก้ตรงนี้:
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});