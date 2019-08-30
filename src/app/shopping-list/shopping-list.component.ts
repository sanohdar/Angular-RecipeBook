import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

  ingredients : Ingredient[] = [];
  private ingSub :Subscription;
  constructor( private shoplistService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoplistService.getIngredients();
    this.ingSub = this.shoplistService.ingredient.subscribe(
      (ing:Ingredient[])=>{
        this.ingredients = ing;
      }
    )
  }

  onEditItem(index:number){
    this.shoplistService.editing.next(index);
  }

  ngOnDestroy() {
    this.ingSub.unsubscribe();

  }
}
