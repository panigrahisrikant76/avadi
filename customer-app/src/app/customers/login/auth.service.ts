import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
      let headers = new HttpHeaders();
    headers.append('Content-Type','application/x-www-form-urlencoded');
      let params = { grant_type: 'password',client_id:'bbs',client_secret:'xyz12345abc',username: username, password: password };
        return this.http.post<any>(`http://localhost:1337/api/oauth/token`, params,{headers:headers})
            .pipe(map(data => {
                // login successful if there's a  token in the response
                console.log()
                if (data) {
                    // store user details and  token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data));
                }

                return data;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
