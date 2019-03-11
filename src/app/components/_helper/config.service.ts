import { Injectable, Inject } from '@angular/core';
import { DataResource } from '../_shared/data.resource';
import { HttpService } from './http.service';

export function configProvider(cs: ConfigService) {
    return () => cs.load();
}

@Injectable()
export class ConfigService {
    constructor(public _http: HttpService, public _data: DataResource, @Inject('BASE_URL') baseUrl: string) {
    }

    load(): Promise<void> {
        let self = this;
        const promise = this._http.get('assets/json/navs.json').toPromise().then(keys => { this._data._navs = keys; }).catch(reasons => { console.log(reasons)});
        return promise;
    }

}