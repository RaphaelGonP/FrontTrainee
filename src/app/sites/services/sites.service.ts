import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Link } from '../model/site';
import { delay, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private readonly API = 'https://badapitest.herokuapp.com/sites';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Link[]>(this.API)
      .pipe(
        first(),
         delay(500),
        tap(sites => console.log(sites))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Link>(`${this.API}/${id}`);
  }

  getAll(): Observable<Link[]>{

    return this.httpClient.get<Link[]>(this.API);
  }

 create(data: Link) : Observable <Link>{
    return this.httpClient.post<Link>(this.API, data);
  }

 update(id: any, data: Link) : Observable <Link>{
    return this.httpClient.put<Link>(`${this.API}/${id}`, data);
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
