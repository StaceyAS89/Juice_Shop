///<reference types="cypress" />

import { faker } from "@faker-js/faker";
import BasePage from "./BasePage";


class AddressPage extends BasePage {
    constructor() {
        super();
        this.country = faker.address.country();
        this.name = faker.name.firstName();
        this.mobileNumber = faker.phone.number('501######');
        this.zipCode = faker.address.zipCode('####');
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
    }

    visit() {
        cy.visit('/#/address/select')
    }
    //Get Add New Address Form
    getAddNewAddressForm() {
        return cy.get(`[aria-label="Add a new address"]`)
    }
    getCounrtyField() {
        return cy.get('[placeholder="Please provide a country."]')
    }
    getNameField() {
        return cy.get('[placeholder="Please provide a name."]')
    }
    getMobileNumberField() {
        return cy.get('[placeholder="Please provide a mobile number." ]')
    }

    getZipCodeField() {
        return cy.get('[placeholder="Please provide a ZIP code."]')
    }
    getAddressField() {
        return cy.get('[placeholder="Please provide an address."]')
    }
    getCityField() {
        return cy.get('[placeholder="Please provide a city."]')
    }
    getStateField() {
        return cy.get('[placeholder="Please provide a state."]')
    }
    getSubmitButton() {
        return cy.get('button#submitButton')
    }


    submitAddNewAddressButton() {
        this.getAddNewAddress().click();
    }

    assertItemCheckoutSubmit(itemName) {
        cy.get('span.mat-simple-snack-bar-content').then(element => {
            expect(element[0].outerText).include(`${itemName}`);
            expect(element[0].outerText).include(`to basket`);
        }
        )
    }
    submitAddNewAddressForm() {
        this.getAddNewAddressForm().click();
        this.getCounrtyField().type(this.country);
        this.getNameField().type(this.name);
        this.getMobileNumberField().type(this.mobileNumber);
        this.getZipCodeField().type(this.zipCode);
        this.getAddressField().type(this.address);
        this.getCityField().type(this.city);
        this.getStateField().type(this.state);
        this.getSubmitButton().click();
    }

    assertAddressIsAdded() {
        cy.get('mat-cell.mat-column-Name').should('contain', `${this.name}`);
        cy.get('mat-cell.mat-column-Address').should('contain', `${this.address}`);
        cy.get('mat-cell.mat-column-Country').should('contain', `${this.country}`);
    }

    selectAddress() {
        cy.get('mat-cell.mat-column-Selection').last().click();
    }
    submitContinueButton() {
        cy.get('[aria-label="Proceed to payment selection"]').click();
    }
}
export default new AddressPage();