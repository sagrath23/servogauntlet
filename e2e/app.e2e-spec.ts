import { ServoGauntletPage } from './app.po';

describe('servo-gauntlet App', () => {
  let page: ServoGauntletPage;

  beforeEach(() => {
    page = new ServoGauntletPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
