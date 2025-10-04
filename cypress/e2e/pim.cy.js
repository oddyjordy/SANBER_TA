const loginPage = require('../pages/LoginPage');
const dashboardPage = require('../pages/DashboardPage');

describe('PIM Feature', function () {
  beforeEach(function () {
    cy.fixture('user').as('userData');
    loginPage.visit();
    cy.then(() => {
      loginPage.login(
        this.userData.validUser.username,
        this.userData.validUser.password
      );
    });
  });

  it('TC05 - Halaman PIM', function () {
    cy.intercept('GET', '**/pim/viewEmployeeList').as('pimPage');
    dashboardPage.goToPIM();
    cy.wait('@pimPage').its('response.statusCode').should('eq', 200);

    cy.url().should('include', '/pim/viewEmployeeList');
    cy.get('h6').should('contain.text', 'PIM');
  });

  it('TC06 - Cari berdasarkan Employee ID', function () {
    cy.intercept('GET', '**/pim/viewEmployeeList').as('searchEmployee');
    dashboardPage.goToPIM();
    dashboardPage.searchUser('0381');

    cy.wait('@searchEmployee').its('response.statusCode').should('eq', 200);
    cy.contains('Record Found').should('be.visible');
    cy.get('div.oxd-table-card').should('contain', '0381');
  });

});
