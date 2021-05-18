describe('Home', function () {
  before(function () {
    cy.bootstrapApp();
    cy.visit('/');
    cy.login('user1@example.com', 'test');
  });

  it('Render the home', function () {
    cy.get('h1').should('contain', 'Hello HomeController! ✅');

    // This message is not translated
    cy.get('p').should('contain', 'translated_message');
  });
});
