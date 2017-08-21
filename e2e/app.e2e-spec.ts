import { CaldwellPage } from './app.po';

describe('caldwell App', () => {
  let page: CaldwellPage;

  beforeEach(() => {
    page = new CaldwellPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
