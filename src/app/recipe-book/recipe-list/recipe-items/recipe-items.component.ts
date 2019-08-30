import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../../recipe-book.model';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {

  @Input() recipeItem : Recipe;
  @Input() i : number;

  constructor() { }

  ngOnInit() {
  }

}
