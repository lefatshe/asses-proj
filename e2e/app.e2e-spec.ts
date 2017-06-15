import { AssesProjPage } from './app.po';

describe('asses-proj App', () => {
  let page: AssesProjPage;

  beforeEach(() => {
    page = new AssesProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
