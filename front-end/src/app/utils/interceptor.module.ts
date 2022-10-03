import {
    HttpErrorResponse, HttpEvent, HttpHandler,
    HttpInterceptor, HttpRequest, HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
// Para capturar as rotas
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, filter, tap } from "rxjs/operators";
import { DataService } from "../services/data.service";


@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(
        private route: Router,
        private dataService: DataService,
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = this.dataService.getSession("token");

        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            })
        }
        return next.handle(req).pipe(
            catchError((err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        alert("Your token is expired. Please sign in again")
                        this.route.navigate(["/"])
                    }
                }

                return throwError(err);
            })
        )
    }

}