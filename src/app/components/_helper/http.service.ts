import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class HttpService {
    constructor(public http: HttpClient) { }
    get(url: string) {
        return this.http.get(url).pipe(
            tap((res: Response) => (res.status == 200) ? res.json() : null),
            catchError(this.handleError('get', []))
        );
    }
    post(url: string, j: any): Observable<any> {
        var params = JSON.stringify(j);
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(url, params, { headers: headers }).pipe(
            tap((res: Response) => res.json()),
            catchError(this.handleError('post'))
        );
    }
    put(url: string, j: any) {
        var params = JSON.stringify(j);
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(url, params, { headers: headers }).pipe(
            tap((res: Response) =>  res.json()),
            catchError(this.handleError('post'))
        );
    }
    upload(url: string, appendData: Array<any>) {
        let fd = new FormData();
        appendData.forEach((e: any) => {
            fd.append(e.name, e.value);
        });
        return this.http.post(url, fd).pipe(
            tap((res: Response) =>  res.json()),
            catchError(this.handleError('post'))
        );
    } 
    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
    log(message: string) {
        //change here
        console.log(`HeroService: ${message}`);
    }
} 