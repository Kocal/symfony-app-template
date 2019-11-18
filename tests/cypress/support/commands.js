// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('execVagrant', command => {
  return cy.exec(`./vagrant-wrapper.sh ${command}`);
});

Cypress.Commands.add('reloadDatabase', () => {
  cy.execVagrant('make init-db@test');
});

// -- This is a parent command --
Cypress.Commands.add('bootstrapApp', () => {
  cy.reloadDatabase();
  cy.execVagrant('bin/console cache:warmup');

  // Make sure we clear and whitelist the auth cookie
  cy.clearCookie('MOCKSESSID');
  Cypress.Cookies.defaults({ whitelist: ['MOCKSESSID'] });
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(`${password}{enter}`);
});

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
