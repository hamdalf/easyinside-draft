import { EasyinsidePage } from './app.po';

describe('easyinside App', function() {
  let page: EasyinsidePage;

  beforeEach(() => {
    page = new EasyinsidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
