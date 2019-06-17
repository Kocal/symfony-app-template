describe('Home', () => {
  before(() => {
    cy.bootstrapApp();
    cy.visit('/');
  });

  it('Render the home', () => {
    cy.get('h1').should('contain', 'Hello HomeController! ✅');

    // This message is not translated
    cy.get('p').should('contain', 'translated_message');
  });
});
