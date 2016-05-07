export class Angular2workshopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2workshop-app h1')).getText();
  }
}
