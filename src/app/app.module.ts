import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeBookService } from './recipe-book/recipe-book.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { FetchResolverService } from './shared/fetch-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import {AuthInterceptService} from './auth/auth-intercept.service';
import {AuthGaurd} from './auth/auth.gaurd';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
      SharedModule
  ],
  providers: [
    DataStorageService,
    RecipeBookService,
    ShoppingListService,
    FetchResolverService,
    AuthService,
    { provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptService,
      multi:true
    },
    AuthGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
