import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Hamburger', ['Meat', 'Cheese', 'Condiments', 'Buns'], ['Step 1', 'Step2', 'Step3'], 4),
    new Recipe('Hot Dog', ['Sausage', 'Saurkraut', 'Condiments', 'Buns'], ['Step 1', 'Step2', 'Step3'], 3)
  ];
  selectedRecipe = null;
  selectedIngredient = null;
  selectedInstructions = null;
      onSelect(ingredient: string): void {
        this.selectedIngredient = ingredient;
      }
      onPick(instruction: string): void {
        this.selectedInstructions = instruction;
      }
  showRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }
  editIngredients(clickedIngredients) {
    this.selectedRecipe.ingredients = clickedIngredients;
  }
  // editInstructions(clickedInstructions) {
  //   this.selectedRecipe.instructions = clickedInstructions;
  // }
  // editRating(clickedRating){
  //   this.selectedRecipe.rating = clickedRating; 
  // }
  finishedEditing() {
    this.selectedRecipe = null;
  }

 

}

