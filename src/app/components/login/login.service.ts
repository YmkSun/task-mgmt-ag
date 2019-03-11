import { Injectable } from "@angular/core";
import { HttpService } from "../_helper/http.service";
import { Login } from './login';
@Injectable()
export class LoginService {

    constructor(private http: HttpService){

    }

    login(loginUser: Login) {
        return this.http.post('login', loginUser);
    }
    
}