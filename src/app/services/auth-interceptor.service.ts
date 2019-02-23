import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('inercept');
    req = req.clone({
      setHeaders: {
        Authorization: localStorage.getItem('token')
      }
    });

    return next.handle(req);
  }

  constructor() {
  }
}
