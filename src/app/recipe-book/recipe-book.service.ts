import {Recipe} from './recipe-book.model';
import {Subject} from 'rxjs';

export class RecipeBookService {

  recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

 /* private recipes: Recipe[] = [
    new Recipe('Burger',
      'King Size ',
      'https://amp.businessinsider.com/images/5c0990b1d5000c07f77ba114-750-563.jpg',
      [
        new Ingredient('meat',1),
        new Ingredient('bun',2),
        new Ingredient('Cabbage Leaf',4),
        new Ingredient('Tomato Slice',2),
        new Ingredient('Pickel',2),
        new Ingredient('French Fries',24)
      ]),
    new Recipe('Chana Chilli','Chilly salty','https://www.jinooskitchen.com/wp-content/uploads/2018/11/chilli-chana_Jinoos-Kitchen-final-2.jpg',
      [
        new Ingredient('Chana',154),
        new Ingredient('spices',5)
      ]),
    new Recipe('Chicken Bhuna','Grilled Rosted Chicken','https://myheartbeets.com/wp-content/uploads/2018/02/bhuna-chicken-onion-masala.jpg',
      [
        new Ingredient('Chicken',1),
        new Ingredient('Chicken Spices',12),
        new Ingredient('Roast Masala',15)
      ]),
    new Recipe('Butter Paneer','Veg Royal Panner with Lots of Butter','https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg',
      [
        new Ingredient('Panner',100),
        new Ingredient('Butter',10)
      ]),
    new Recipe('Tawa Roti','Like Home made Roti','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtY-n72qRtjT5gOqIlTy6p3HDgfUF5wKtjjplXrQDnjlyMpZhR',
      [
        new Ingredient('Wheat',7)
      ]
    )
  ];*/

 private recipes:Recipe[] = [];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeDetails(index:number){
    return this.recipes.slice()[index];
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }

  fetchedRecipes(recipes:Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

}
