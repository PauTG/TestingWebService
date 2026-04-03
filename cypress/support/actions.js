class Actions {

  click(selector) {
    cy.get(selector).click({ force: true });
  }

  type(selector, text) {
    cy.get(selector).type(text);
  }

}

export default new Actions();