import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthSuperService} from './authSuper.service';

@Injectable()
export class AuthSuperInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthSuperService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated())
    {
      req = req.clone({
        setHeaders: {
          // @ts-ignore
          Authorization: this.auth.getToken()
        }
      });
    }
    return next.handle(req);
  }
}
