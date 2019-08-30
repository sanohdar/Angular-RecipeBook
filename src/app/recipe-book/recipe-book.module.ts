import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {RecipeItemsComponent} from './recipe-list/recipe-items/recipe-items.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeBookComponent} from './recipe-book.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeBookRoutingModule} from './recipe-book-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations:[
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemsComponent,
    RecipeDetailsComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports:[
    SharedModule,
    ReactiveFormsModule,
    RecipeBookRoutingModule
  ]
})
export class RecipeBookModule {}
