import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import HomePage from '../pages/HomePage';

describe('Qa module WebService :)', () => {
  it('Registration fails with leaked password', () => {
    const user = {
      firstName: 'Pawli',
      lastName: 'Test',
      email: `pawli${Date.now()}@test.com`,
      password: '123456'
    };

    RegisterPage.visit();
    RegisterPage.fillForm(user);
    RegisterPage.submit();
    RegisterPage.validateError();

  });

  it('Brand filter should not show duplicates', () => {
    HomePage.visit();
    HomePage.search('drill');

    cy.wait(2000);

    cy.get('label').then(($labels) => {
      const texts = [...$labels].map(el => el.innerText.trim());
      const unique = [...new Set(texts)];
      expect(texts.length).to.eq(unique.length);
    });

  });

  it('User should see confirmation after password reset', () => {

    ForgotPasswordPage.visit();
    ForgotPasswordPage.enterEmail('test@test.com');
    ForgotPasswordPage.submit();
    ForgotPasswordPage.validateMessage();

  });

  it('Product info should change with language', () => {

    HomePage.visit();
    HomePage.changeLanguageToSpanish();
    HomePage.validateSpanish();

  });

});