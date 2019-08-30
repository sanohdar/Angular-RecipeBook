import {Ingredient} from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingListService {

  private ingredients : Ingredient[] = [
    new Ingredient('Apple',10),
    new Ingredient('Tomoto',12),
    new Ingredient('Red Pepper',13),
    new Ingredient('Butter',3),
    new Ingredient('Edible Oil',1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index:number) {
    return this.ingredients[index];
  }

  ingredient = new Subject<Ingredient[]>();
  editing = new Subject<number>();

  addIngredient(ing:Ingredient) {
    this.ingredients.push(ing);
    this.ingredient.next(this.ingredients.slice());
  }

  deletIngredient(index : number) {
    this.ingredients.splice(index,1);
    this.ingredient.next(this.ingredients.slice());
  }

  concatIngredient(ing : Ingredient[]){
    this.ingredients = this.ingredients.concat(ing);
    this.ingredient.next(this.ingredients.slice());
  }

  editIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredient.next(this.ingredients.slice());
  }

}
