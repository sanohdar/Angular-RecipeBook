import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {UrlTree} from '@angular/router/src/url_tree';
import {RouterStateSnapshot} from '@angular/router/src/router_state';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/internal/operators';

@Injectable()

export class AuthGaurd implements CanActivate{

  constructor(private authService :AuthService,
              private router :Router){}

  canActivate(route: ActivatedRouteSnapshot
              , state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user.pipe(
      take(1),
      map(user => {
        let isAuth = !!user;
        if(isAuth)
          return true;
        return this.router.createUrlTree(['/auth']);

      })
    )
  }

}
