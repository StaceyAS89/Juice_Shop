///<reference types="cypress"/>
import { faker } from "@faker-js/faker";
import BasePage from "./BasePage";

class LoginPage extends BasePage {
    constructor() {
        super();
        this.invalidEmail = faker.internet.email();
        this.invalidPassword = faker.internet.password();

    }
    visit() {
        cy.log('Open website login page');
        cy.visit('/#/login')
    }
    getEmailField() {
        return cy.get('#email');
    }

    getPassword() {
        return cy.get('#password');
    }

    getForgotPasswordLink() {
        return cy.get('a.forgot-pw');
    }
    getLoginButton() {
        return cy.get('button#loginButton');
    }

    getRememberMeCheckbox() {
        return cy.get('#rememberMe label')
    }
    getRegisterLink() {
        return cy.get('[href="#/register"]')
    }

    submitLoginForm(user) {
        cy.log('Login ...')
        this.getEmailField().type(user.email);
        this.getPassword().type(user.password);
        this.getRememberMeCheckbox().click();
        this.getLoginButton().click();
    }

    assertUserIsNotLogIn() {
        cy.getAllLocalStorage().should(() => {
            expect(localStorage.getItem('email')).to.be.null;
            expect(localStorage.getItem('token')).to.be.null;
        })
    }

    assertLoginLocalStorage(user) {
        cy.getAllLocalStorage().should(() => {
            expect(localStorage.getItem('email')).to.eq(user.email)
        })
    }
    getErrorMessageWithEmptyField() {
        return cy.get('mat-error.mat-error')
    }
    assertSubmitloginFormWithEmptyEmail() {
        this.getErrorMessageWithEmptyField().should('have.text', 'Please provide an email address.')

    }
    submitLoginFormWithEmptyEmail(user) {
        cy.log('Login with empty email ...')
        this.getEmailField().type('{enter}');
        this.getPassword().type(user.password);
        this.getRememberMeCheckbox().click();
        this.assertSubmitloginFormWithEmptyEmail();
    }

    submitLoginFormWithEmptyPassword(user) {
        cy.log('Login with empty password ...')
        this.getEmailField().type(user.email);
        this.getPassword().type('{enter}');
        this.getRememberMeCheckbox().click();
        this.assertSubmitloginFormWithEmptyPassword();
    }

    assertSubmitloginFormWithEmptyPassword() {
        this.getErrorMessageWithEmptyField().should('have.text', 'Please provide a password.')

    }
    submitLoginFormWithInvalidEmail(user) {
        cy.log('Login with empty email ...')
        this.getEmailField().type(this.invalidEmail);
        this.getPassword().type(user.password);
        this.getRememberMeCheckbox().click();
        this.getLoginButton().click();
        this.assertSubmitLoginFormWithInvalidEmaiPassword();
    }
    submitLoginFormWithInvalidPassword(user) {
        cy.log('Login with empty password ...')
        this.getEmailField().type(user.email);
        this.getPassword().type(this.invalidPassword);
        this.getRememberMeCheckbox().click();
        this.getLoginButton().click();
        this.assertSubmitLoginFormWithInvalidEmaiPassword();
    }
    getErrorMessageWithInvalidEmailPassword() {
        return cy.get('.error.ng-star-inserted')
    }
    assertSubmitLoginFormWithInvalidEmaiPassword() {
        this.getErrorMessageWithInvalidEmailPassword().should('have.text', 'Invalid email or password.')
    }
}

export default new LoginPage();