const loginPage = require('../pages/LoginPage');

describe('Login Feature', () => {
  beforeEach(() => {
    cy.fixture('user').as('userData');
    loginPage.visit();
  });

  it('TC01 - Login dengan username & password valid', function () {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');
    loginPage.login(this.userData.validUser.username, this.userData.validUser.password);
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302);
    cy.url().should('include', '/dashboard');
  });

  it('TC02 - Login dengan username valid & password salah', function () {
     cy.intercept('POST', '**/auth/validate').as('loginFail')
    loginPage.login(this.userData.invalidUser.username, this.userData.invalidUser.password);
    cy.get(loginPage.errorMessage).should('be.visible');
     cy.wait('@loginFail').its('response.statusCode').should('eq', 302 , 304)
  });
});
