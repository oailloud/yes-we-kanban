import { YesWeKanbanPage } from './app.po';

describe('yes-we-kanban App', function() {
  let page: YesWeKanbanPage;

  beforeEach(() => {
    page = new YesWeKanbanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ywk works!');
  });
});
