class ForgotPasswordPage {
  forgotPasswordLink = 'p.orangehrm-login-forgot-header';
  usernameInput = 'input[name="username"]';
  resetButton = 'button.orangehrm-forgot-password-button[type="submit"]';
  successMessage = '.orangehrm-forgot-password-title'; 

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  resetPassword(username) {
    cy.get(this.forgotPasswordLink).click();
    cy.url().should('include', '/requestPasswordResetCode');
    cy.get(this.usernameInput).should('be.visible').clear().type(username);
    cy.contains('button.orangehrm-forgot-password-button', 'Reset Password')
      .should('be.visible')
      .click({ force: true });
  }

  verifyResetSuccess(expectedText) {
    cy.get(this.successMessage)
      .should('be.visible')
      .and('contain.text', expectedText);
  }
}

module.exports = new ForgotPasswordPage();
