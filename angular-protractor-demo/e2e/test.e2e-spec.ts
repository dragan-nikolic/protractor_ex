/* Path: e2e/test.e2e-spec.ts */
 
import { browser, by, element } from 'protractor';
 
describe('Protractor Demo', () => {
  
  beforeEach(() => {
    browser.get('/');
  });
 
  it('should display the name of the application',() => {
    
    expect(element(by.css('.pastebin')).getText()).toContain('Pastebin Application');
    
  });
   
  it('create Paste button should work',() => {
    
    expect(element(by.id('source-modal')).isPresent()).toBeFalsy("The modal window shouldn't appear right now ");
    element(by.buttonText('create Paste')).click();
    expect(element(by.id('source-modal')).isPresent()).toBeTruthy('The modal window should appear now');
    
  });
});