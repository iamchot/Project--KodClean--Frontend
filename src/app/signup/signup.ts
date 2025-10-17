// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   imports: [],
//   templateUrl: './signup.html',
//   styleUrl: './signup.css'
// })
// export class Signup {

// }
// ISignUpFormData.ts
// Create this file separately, or define the interface directly above the class.

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

export interface ISignUpFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    favoriteCategories: string[];
}


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit {
 
  public formData: ISignUpFormData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    favoriteCategories: []
  };

  // List of all available categories
  public availableCategories: string[] = [
    'Vegetarian',
    'Vegan',
    'Thai fusion',
    'Clean Eating',
    'Spaghetti',
    'salad'
  ];

  // Component lifecycle hook (optional, but good practice)
  ngOnInit(): void {
    // You could load data or initialize the form here if needed
  }

  // 2. Logic for Category Selection
  public isCategorySelected(category: string): boolean {
    return this.formData.favoriteCategories.includes(category);
  }

  public toggleCategory(category: string): void {
    const categories = this.formData.favoriteCategories;
    const isSelected = categories.includes(category);

    if (isSelected) {
      // Deselect: remove the category from the array
      this.formData.favoriteCategories = categories.filter(c => c !== category);
    } else {
      // Select: add the category to the array
      this.formData.favoriteCategories = [...categories, category];
    }
    console.log('Selected categories:', this.formData.favoriteCategories);
  }

  // 3. Form Submission Handler
  public onSubmit(): void {
    // Perform Validation
    if (this.formData.password !== this.formData.confirmPassword) {
      console.error('Validation Error: Passwords do not match.');
      alert('Passwords do not match. Please check again.');
      return;
    }

    if (!this.formData.name || !this.formData.email || !this.formData.password) {
      console.error('Validation Error: Required fields are missing.');
      alert('Please fill in all required fields.');
      return;
    }

    // Submission Logic (Your existing logic)
    console.log('Form Data Submitted:', this.formData);

    // In a real app, you would call a service here:
    // this.authService.register(this.formData).subscribe(...)
    
    alert(`Welcome, ${this.formData.name}! Your account is being created.`);
    
    // Optional: Reset the form after submission
    this.resetForm();
  }

  // Optional: Reset function
  private resetForm(): void {
      this.formData = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        favoriteCategories: []
      };
  }
}