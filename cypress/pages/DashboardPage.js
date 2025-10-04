class DashboardPage {
  adminMenu = 'a.oxd-main-menu-item[href="/web/index.php/admin/viewAdminModule"]';
  pimMenu = 'a.oxd-main-menu-item[href="/web/index.php/pim/viewPimModule"]';
  usernameInput = 'form.oxd-form input.oxd-input'; 
  searchButton = 'form.oxd-form button[type="submit"]';

  goToAdmin() {
    cy.get(this.adminMenu)
      .should('be.visible')
      .click();
  }

  goToPIM() {
    cy.get(this.pimMenu)
      .should('be.visible')
      .click();
  }

  searchUser(username) {
    cy.get(this.usernameInput)
      .should('be.visible')
      .clear()
      .type(username);

    cy.get(this.searchButton)
      .should('be.visible')
      .click();
  }
}

module.exports = new DashboardPage();
