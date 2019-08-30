import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Recipe} from '../recipe-book/recipe-book.model';
import {RecipeBookService} from '../recipe-book/recipe-book.service';
import {DataStorageService} from './data-storage.service';

@Injectable()
export class FetchResolverService implements Resolve<Recipe[]> {

  constructor(private dataService:DataStorageService,
              private recipeSerice:RecipeBookService){}

  resolve(route:ActivatedRouteSnapshot,
          state:RouterStateSnapshot){
    let recipes = this.recipeSerice.getRecipes();
    if(recipes.length == 0){
      return this.dataService.fetchData();
    }
  }
}
