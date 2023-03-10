export default class BasePage {

    getAccountButton() {
        return cy.get('#navbarAccount');
    }

    getLoginButton() {
        return cy.get('#navbarLoginButton')
    }

    submitAccountLoginPage() {
        this.getAccountButton().click();
        this.getLoginButton().click();
    }

}