import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') slForm : NgForm;
  subscription : Subscription;
  editMode=false;
  editIndex:number;
  ingredient:Ingredient;

  constructor(private shoplistService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoplistService.editing
      .subscribe(
        (index:number) => {
          this.editMode = true;
          this.editIndex = index;
          this.ingredient = this.shoplistService.getIngredient(index);
          this.slForm.setValue({
            name: this.ingredient.name,
            amount: this.ingredient.amount
          })
        }
      )
  }

  onAdd(form:NgForm){
   const value = form.value;
    const Ing = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoplistService.editIngredient(this.editIndex,Ing);
    }else{
      this.shoplistService.addIngredient(Ing);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.shoplistService.deletIngredient(this.editIndex);
    this.editMode = false;
    this.slForm.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
