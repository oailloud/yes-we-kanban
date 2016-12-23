import { browser, element, by } from 'protractor';

export class YesWeKanbanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ywk-root h1')).getText();
  }
}
