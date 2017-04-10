import { Ng2VirtualScrollPage } from './app.po';

describe('ng2-virtual-scroll App', () => {
  let page: Ng2VirtualScrollPage;

  beforeEach(() => {
    page = new Ng2VirtualScrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
