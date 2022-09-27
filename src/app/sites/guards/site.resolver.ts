import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Link } from '../model/site';
import { SitesService } from '../services/sites.service';

@Injectable({
  providedIn: 'root'
})
export class SiteResolver implements Resolve<Link> {

  constructor(private service: SitesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Link> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ id: 0, nome: '', url: '' });
  }
}
