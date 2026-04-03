import Actions from '../support/actions';

class ForgotPasswordPage {
  visit() {
    cy.visit('/auth/forgot-password');
  }
  enterEmail(email) {
    Actions.type('#email', email);
  }

submit() {
  cy.get('#email').type('{enter}');
}
  validateMessage() {
    cy.get('body').should('contain.text', 'email');
  }
}

export default new ForgotPasswordPage();