import { GccnmPage } from './app.po';

describe('gccnm App', () => {
  let page: GccnmPage;

  beforeEach(() => {
    page = new GccnmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
