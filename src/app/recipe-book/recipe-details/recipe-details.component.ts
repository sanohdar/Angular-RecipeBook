import { Component, OnInit ,Input} from '@angular/core';
import {Recipe} from '../recipe-book.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeBookService} from '../recipe-book.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() selectedRecipe:Recipe;
  index:number;

  constructor(private slService : ShoppingListService,
              private rService : RecipeBookService,
              private route : ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.selectedRecipe = this.rService.getRecipeDetails(this.index);
      }
    )
  }

  addToSL() {
    this.slService.concatIngredient(this.selectedRecipe.ingredients);
  }

  onDelete() {
    this.rService.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }

}
