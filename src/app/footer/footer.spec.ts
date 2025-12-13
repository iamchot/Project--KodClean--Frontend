import { ComponentFixture, TestBed } from '@angular/core/testing';

// --- 1. แก้ตรงนี้ จาก Footer เป็น FooterComponent ---
import { FooterComponent } from './footer';

// --- 2. แก้ตรงนี้ด้วย (เพื่อความชัดเจน) ---
describe('FooterComponent', () => {
  // --- 3. แก้ตรงนี้ ---
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // --- 4. แก้ตรงนี้ ---
      imports: [FooterComponent]
    })
    .compileComponents();

    // --- 5. แก้ตรงนี้ ---
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});