import { BlackmawPage } from './app.po';

describe('blackmaw App', () => {
  let page: BlackmawPage;

  beforeEach(() => {
    page = new BlackmawPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
