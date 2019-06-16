describe('Home', () => {
  before(() => {
    cy.visit('/');
  });

  it('Render the home', () => {
    cy.get('h1').should('contain', 'Hello HomeController! ✅');
  });
});
