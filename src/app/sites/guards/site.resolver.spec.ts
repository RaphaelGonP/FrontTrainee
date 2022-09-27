import { TestBed } from '@angular/core/testing';

import { SiteResolver } from './site.resolver';

describe('SiteResolver', () => {
  let resolver: SiteResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SiteResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
