import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector,
              private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any{
    // const login = /login/;
    // console.log("url", this.router.url);
    var token = localStorage.getItem("token")
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    // console.log("token", tokenizedReq);
    return next.handle(tokenizedReq).pipe(
      catchError(err => {
        // onError
        console.log(err);
        if (err instanceof HttpErrorResponse) {
            console.log(err.status);
            console.log(err.statusText);
            if (err.status === 401) {
              this.router.navigateByUrl('/token-expired')
            }
        }
        return Observable.throw(err);
    }) as any
    )
  }
}
