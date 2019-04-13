import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerListService {
    constructor(private http: HttpClient) { }

    getCustomers(username: string, password: string) {
      let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
        return this.http.get<any>(`http://localhost:1337/api/customers`,{headers:headers})
            .pipe(map(data => {
                return data;
            }));
    }

   
}

