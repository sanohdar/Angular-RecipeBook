import {Component, Input, OnInit} from '@angular/core';
import {RecipeBookService} from './recipe-book/recipe-book.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[]
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthService){}
  ngOnInit() {
    this.authService.autoLogin();
  }
}
