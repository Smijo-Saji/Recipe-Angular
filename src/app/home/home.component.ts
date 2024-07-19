import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedCategory: string = 'Choose Category';
  categories: string[] = [
    'Choose By Meal-Type',
    'Dinner',
    'Lunch',
    'Snack',
    'Dessert',
    'Side Dish',
    'Appetizer',
    'Beverage',
    'Breakfast',
  ];

  searchData: any = '';
  restList: any = [];
  constructor(private service: ApiServiceService) {}
  ngOnInit(): void {
    this.service.getAllRecipies().subscribe((res: any) => {
      this.restList = res.recipes;
    });
  }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
  }
}
