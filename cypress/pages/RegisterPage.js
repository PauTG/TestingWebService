import Actions from '../support/actions';

class RegisterPage {

  visit() {
    cy.visit('/auth/register');
  }

  fillForm(user) {
    Actions.type('#first_name', user.firstName);
    Actions.type('#last_name', user.lastName);
    Actions.type('#email', user.email);
    Actions.type('#password', user.password);
  }

  submit() {
    Actions.click('button[type="submit"]');
  }

  validateError() {
    cy.contains('Password').should('be.visible');
  }
}

export default new RegisterPage();