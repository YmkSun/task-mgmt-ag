import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
declare var jQuery: any;
@Injectable()
export class ComService {
    public _appbean: any;
    _rptPageSize: number = 10;

    public _appbeanSource = new Subject<any>();
  
    appbean$ = this._appbeanSource.asObservable();

    sendBean(x: any) {
        this._appbean = x;
        this._appbeanSource.next(x);
    }
    getBean(): any {
        return this._appbean;
    }
    
}