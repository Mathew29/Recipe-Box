import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Yum!';
  recipes: Recipe[] = [
    new Recipe('Hamburger', ['Meat', 'Cheese', 'Condiments', 'Buns'], 'Cook Burger'),
  ];
}

