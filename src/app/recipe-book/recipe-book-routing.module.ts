import {NgModule} from '@angular/core';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {FetchResolverService} from '../shared/fetch-resolver.service';
import {RecipeBookComponent} from './recipe-book.component';
import {AuthGaurd} from '../auth/auth.gaurd';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RouterModule, Routes} from '@angular/router';

const recipeRoute: Routes = [
  {path:'',component:RecipeBookComponent,
  canActivate:[AuthGaurd],
  children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {
      path:':id',
      component:RecipeDetailsComponent,
      resolve:[FetchResolverService]
    },
    {
      path:':id/edit',
      component:RecipeEditComponent,
      resolve:[FetchResolverService]
    }
  ]}];

@NgModule({
  imports:[RouterModule.forChild(recipeRoute)],
  exports:[RouterModule]
})
export class RecipeBookRoutingModule {}
