import { OctionPage } from './app.po';

describe('oction App', () => {
  let page: OctionPage;

  beforeEach(() => {
    page = new OctionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
