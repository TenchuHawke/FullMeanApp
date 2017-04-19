import { DefaultTry2Page } from './app.po';

describe('default-try2 App', () => {
  let page: DefaultTry2Page;

  beforeEach(() => {
    page = new DefaultTry2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
