import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';

import {AuthService} from './auth.service';
import {exhaust, exhaustMap, take} from 'rxjs/internal/operators';

@Injectable()
export class AuthInterceptService implements HttpInterceptor {

  constructor(private authService:AuthService){}

  intercept(req: HttpRequest<any>,next: HttpHandler){

   return this.authService.user.pipe(take(1),exhaustMap(
      (user) => {
        if(!user) {
          return next.handle(req);
        }
        let modifiedReq = req.clone({params: new HttpParams().set('auth',user.token)})
        return next.handle(modifiedReq);
      }))
  }
}
