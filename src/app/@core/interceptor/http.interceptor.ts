import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, finalize, map, mergeMap, Observable, retry, throwError } from "rxjs";
import { AuthenticationService } from "src/app/@service/authentication.service";
import { InterceptorHttpParams, RequestOptions } from "src/app/@service/http.service";
import { LoadingService } from "src/app/@service/loading.service";
import { MessageService } from "src/app/@service/message.service";

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService,
    private authenticationService: AuthenticationService,
    private messageService: MessageService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let requestOptions: RequestOptions;
    req.params instanceof InterceptorHttpParams ? (requestOptions = req.params.options) : (requestOptions = {});

    if (!requestOptions.hideLoading) {
      this.loadingService.increase();
    }

    let headers = req.headers;
    if ((req.method.toLowerCase() === 'post' || req.method.toLowerCase() === 'put' ||
         req.method.toLowerCase() === 'get' || req.method.toLowerCase() === 'delete') && !(req.body instanceof FormData)) {
      headers = headers.set('Content-Type', 'application/json');
    }

    if (requestOptions.ignoreAuthToken) {
      const authReq = req.clone({
        headers
      });

      return this.next(next, authReq, requestOptions);
    }

    return this.authenticationService.getAccessToken().pipe(
      mergeMap((accessToken: string| null) => {
        if (!!accessToken) {
          headers.set('Authorization', `Bearer ${accessToken}`);
        }
        const authReq = req.clone({
          headers
        })

        return this.next(next, authReq, requestOptions);
      })
    )
  }

  next(next: HttpHandler, req: HttpRequest<unknown>, requestOptions: RequestOptions) {
    return next.handle(req).pipe(
      retry(0),
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: { status: number, message: string}) => {
        this.messageService.showMessage({
          content: error.message
        })
        return throwError(() => error);
      }),
      finalize(() => {
        if (!requestOptions.hideLoading) {
          this.loadingService.decrease();
        }
      })
    )
  }
}
