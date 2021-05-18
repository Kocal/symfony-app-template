describe('Auth - login', function () {
  before(function () {
    cy.bootstrapApp();
  });

  beforeEach(function () {
    cy.logout();
  });

  specify("I can't access a protected page without being authenticated", function () {
    cy.visit('/');

    cy.location('pathname').should('equal', '/login');
  });

  specify("I can't login if my credentials are invalid", function () {
    cy.visit('/');

    cy.location('pathname').should('equal', '/login');

    cy.login('i-dont-exist@example.com', 'test');

    cy.location('pathname').should('equal', '/login');
    cy.get('body').should('contain', 'Invalid credentials');
  });

  it('I can login and access a protected page', function () {
    cy.visit('/');
    cy.login('user1@example.com', 'test');

    cy.location('pathname').should('equal', '/');
    cy.get('h1').should('contain', 'Hello HomeController! ✅');
    // This message is not translated
    cy.get('p').should('contain', 'translated_message');
  });
});
