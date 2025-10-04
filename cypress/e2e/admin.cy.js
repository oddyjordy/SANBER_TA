const loginPage = require('../pages/LoginPage');
const dashboardPage = require('../pages/DashboardPage');

describe('Admin Feature', function () {
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

  it('TC04 - Cari berdasarkan username', function () {
    cy.intercept('GET', '**/admin/viewSystemUsers*').as('searchAdmin');
    dashboardPage.goToAdmin();
    dashboardPage.searchUser('Admin');

    cy.wait('@searchAdmin').its('response.statusCode').should('eq', 200);
    cy.contains('Record Found').should('be.visible');
    cy.get('div.oxd-table-card').should('contain', 'Admin');
  });
  
});
