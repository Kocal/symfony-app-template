// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    reloadDatabase(): Chainable<Exec>;
    bootstrapApp(): void;
    login(email: string, password: string): void;
    logout(): void;
  }
}

Cypress.Commands.add('reloadDatabase', () => {
  cy.exec('make reload-db@test');
});

Cypress.Commands.add('bootstrapApp', () => {
  cy.reloadDatabase();

  // Make sure we clear and whitelist the auth cookie
  cy.clearCookie('MOCKSESSID');
  Cypress.Cookies.defaults({ preserve: ['MOCKSESSID'] });
  cy.logout();
});

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.get('input[name="email"]').clear().type(email);
  cy.get('input[name="password"]').clear().type(`${password}{enter}`);
});

Cypress.Commands.add('logout', () => {
  cy.visit('/logout');
});
