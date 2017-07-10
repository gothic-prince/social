import { SocPage } from './app.po';

describe('soc App', () => {
  let page: SocPage;

  beforeEach(() => {
    page = new SocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
