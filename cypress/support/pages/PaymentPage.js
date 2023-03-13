///<reference types="cypress" />

import { faker } from "@faker-js/faker";
import BasePage from "./BasePage";


class PaymentPage extends BasePage {
    constructor() {
        super();
        this.name = faker.name.firstName();
        this.cardNumber = faker.finance.creditCardNumber('################');
        this.monthNumber = faker.datatype.number({ 'min': 1, 'max': 12 });
        this.yearNumber = faker.datatype.number({ 'min': 2080, 'max': 2099 }).toString();

    }
    visit() {
        cy.visit('/#/payment/shop')
    }
    assertDeliveryIsAdded() {
        cy.get('h1').should('contain', 'My Payment Options')
    }
    // cy.log('Add new card');

    submitAddNewCardButton() {
        cy.get('#mat-expansion-panel-header-0').click();
    }
    getNameAddNewCard() {
        return cy.get('.mat-input-element.mat-form-field-autofill-control.ng-tns-c119-26')
    }
    getCardNumberAddNewCard() {
        return cy.get('.mat-input-element.mat-form-field-autofill-control.ng-tns-c119-27 ')
    }
    getExpireMonthAddNewCard() {
        return cy.get('.mat-input-element.mat-form-field-autofill-control.ng-tns-c119-28 ')
    }
    selectExpireMonthAddNewCard(monthNumber) {
        return cy.get(`option[value=${monthNumber}]`)
    }

    getExpireYearAddNewCard() {
        return cy.get('.mat-input-element.mat-form-field-autofill-control.ng-tns-c119-29');
    }
    selectExpireMonthAddNewCard(yearNumber) {
        return cy.get(`option.ng-star-inserted[value=${yearNumber}]`)
    }
    submitButtonAddNewCard() {
        return cy.get('#submitButton')
    }
    submitAddNewCard() {
        this.getNameAddNewCard().type(this.name);
        this.getCardNumberAddNewCard().type(this.cardNumber);
        this.getExpireMonthAddNewCard().select(this.monthNumber).should('be.visible');
        this.getExpireYearAddNewCard().select(this.yearNumber).should('be.visible')
        this.submitButtonAddNewCard().click();
    }
    assertCardIsAdded() {
        cy.get('.cdk-cell.cdk-column-Name.mat-column-Name').should('contain', `${this.name}`)
    }

    chooseAddedCard() {
        cy.get('.cdk-cell.cdk-column-Name.mat-column-Name').contains(this.name).parent().find('mat-radio-button').click()
    }
    submitPaymentOption() {
        cy.get('[aria-label="Proceed to review"]').click();
    }
}
export default new PaymentPage();