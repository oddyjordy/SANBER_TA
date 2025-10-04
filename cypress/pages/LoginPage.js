class LoginPage {
  usernameInput = '[name="username"]';
  passwordInput = '[name="password"]';
  loginButton = 'button.orangehrm-login-button';
  errorMessage = '.oxd-alert-content.oxd-alert-content--error';


  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  login(username, password) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }
}

module.exports = new LoginPage();
