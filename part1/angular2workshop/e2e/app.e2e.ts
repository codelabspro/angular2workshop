import { Angular2workshopPage } from './app.po';

describe('angular2workshop App', function() {
  let page: Angular2workshopPage;

  beforeEach(() => {
    page = new Angular2workshopPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2workshop works!');
  });
});
