import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const appRoutes: Routes = [
    {
        path:'',
        redirectTo:'/recipes',
        pathMatch:'full'
    },
    {
        path:'recipes',
        loadChildren:'./recipe-book/recipe-book.module#RecipeBookModule'
    },
    {
        path:'shoppingList',
        loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule'
    },
    {
        path:'auth',
        loadChildren:'./auth/auth.module#AuthModule'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }