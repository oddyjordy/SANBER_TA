const forgotPage = require('../pages/ForgotPasswordPage');

describe('Forgot Password Feature', () => {
  beforeEach(() => {
    forgotPage.visit();
  });

  it('TC03 - Lupa Kata Sandi Sukses', () => {
    forgotPage.resetPassword('Admin');
    cy.url().should('include', '/sendPasswordReset');
    cy.get(forgotPage.successMessage)
      .should('be.visible')
      .and('contain.text', 'Reset Password link sent successfully');
  });
});
