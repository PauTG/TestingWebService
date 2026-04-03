class HomePage {

  visit() {
    cy.visit('/');
  }

  search(product) {
    cy.get('input').first().type(`${product}{enter}`);
  }

  changeLanguageToSpanish() {
    cy.get('body').then(($body) => {
      if ($body.text().includes('EN')) {
        cy.contains('EN').click({ force: true });
      } else {
        cy.get('[class*="dropdown"]').first().click({ force: true });
      }
    });

    cy.contains('ES').click({ force: true });
  }

  validateSpanish() {
    cy.get('body').should('contain.text', 'Categor');
  }
}

export default new HomePage();