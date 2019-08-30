import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipe-book/recipe-book.model';
import {RecipeBookService} from '../recipe-book/recipe-book.service';
import {map, tap} from 'rxjs/internal/operators';

@Injectable()
export class DataStorageService {

  constructor(private http:HttpClient,
              private recipeService:RecipeBookService){}

  storeData() {
    let recipesData:Recipe[]=[];
    recipesData = this.recipeService.getRecipes();

    this.http
      .put(
        'https://sample-cefa4.firebaseio.com/recipes.json',
        recipesData
      ).subscribe();
  }

  fetchData() {
    return this.http
      .get<Recipe[]>('https://sample-cefa4.firebaseio.com/recipes.json')
      .pipe(
        map((res) => {
          return res;
        }),
        tap( (res) => {
          this.recipeService.fetchedRecipes(res);
        }))
  }
}
