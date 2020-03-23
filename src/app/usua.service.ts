import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
//import 'rxjs/add/operator/map';
import { Usua } from './usua';

@Injectable()
export class UsuaService {

    private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<Usua[]> {
    return this.http.get<Usua[]>(this.serviceUrl);
  }

}