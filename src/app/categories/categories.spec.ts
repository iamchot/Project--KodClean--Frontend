import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // 1. Import ตัวนี้
import { CategoriesComponent } from './categories'; // 2. แก้ชื่อ Component ให้ถูกต้อง

describe('CategoriesComponent', () => { // (แก้ชื่อ describe ให้อ่านง่ายขึ้น)
  let component: CategoriesComponent; // 3. แก้ Type
  let fixture: ComponentFixture<CategoriesComponent>; // 4. แก้ Type

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CategoriesComponent,
        RouterTestingModule // 5. เพิ่ม RouterTestingModule เข้าไปใน imports
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent); // 6. แก้ชื่อ Component ที่ใช้สร้าง
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});