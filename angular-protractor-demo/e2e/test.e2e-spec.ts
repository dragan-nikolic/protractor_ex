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

  it('should accept and save input values', () => {
    element(by.buttonText('create Paste')).click();

    //send input values to the form using sendKeys
    
    element(by.name('title')).sendKeys('Hello world in Ruby');
    element(by.name('language')).element(by.cssContainingText('option', 'Ruby')).click();
    element(by.name('paste')).sendKeys("puts 'Hello world';");

    element(by.buttonText('Save')).click();

    //expect the table to contain the new paste
    const lastRow = element.all(by.tagName('tr')).last();
    expect(lastRow.getText()).toContain("Hello world in Ruby");
  });
});