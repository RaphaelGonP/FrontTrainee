import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SitesComponent } from './containers/sites/sites.component';
import { SiteFormComponent } from './containers/sites-form/site-form.component';
import { SiteResolver } from './guards/site.resolver';

const routes: Routes = [
  { path: '', component: SitesComponent },
  { path: 'new', component: SiteFormComponent, resolve: { link: SiteResolver } },
  { path: 'edit/:id', component: SiteFormComponent, resolve: { link: SiteResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitesRoutingModule { }
