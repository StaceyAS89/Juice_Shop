///<reference types="cypress">
import { faker } from '@faker-js/faker';
import BasePage from "./BasePage";

class RegistrationPage extends BasePage {
    constructor() {
        super();
        this.email = faker.internet.email();
        this.password = faker.internet.password(20);
        this.numberQuestionSecurity = faker.datatype.number({
            'min': 1,
            'max': 12
        });
        this.stringAnswerSecurity = faker.random.word();
    }
    visit() {
        cy.visit('/#/register');
    }
    getEmailField() {
        return cy.get('#emailControl');
    }

    getPassword() {
        return cy.get('#passwordControl');
    }
    getRepeatPasswordLink() {
        return cy.get('#repeatPasswordControl');
    }

    getSecurityQuestionField() {
        return cy.get('div.mat-select-arrow-wrapper');
    }
    getSecurityAnswerField() {
        return cy.get('#securityAnswerControl');
    }
    getRegisterButton() {
        return cy.get('button#registerButton');
    }

    getAlreadyCustomerink() {
        return cy.get('#alreadyACustomerLink')
    }

    selectSecurityQuestion() {
        this.getSecurityQuestionField().click();
        cy.get(`#mat-option-${this.numberQuestionSecurity}`).click();
    }

    submitUserRegistrationForm() {
        cy.log('Registation process')
        this.getEmailField().type(this.email);
        this.getPassword().type(this.password);
        this.getRepeatPasswordLink().type(this.password);
        this.selectSecurityQuestion();
        this.getSecurityAnswerField().type(this.stringAnswerSecurity);
        this.getRegisterButton().click();
    }

    assertSubmitUserRegistrationForm() {
        cy.log('Verify successful user registration');
        cy.get('#cdk-overlay-3').should('have.text', 'Registration completed successfully. You can now log in.X')
    }

}

export default new RegistrationPage();