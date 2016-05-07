import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2workshopAppComponent } from '../app/angular2workshop.component';

beforeEachProviders(() => [Angular2workshopAppComponent]);

describe('App: Angular2workshop', () => {
  it('should create the app',
      inject([Angular2workshopAppComponent], (app: Angular2workshopAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2workshop works!\'',
      inject([Angular2workshopAppComponent], (app: Angular2workshopAppComponent) => {
    expect(app.title).toEqual('angular2workshop works!');
  }));
});
