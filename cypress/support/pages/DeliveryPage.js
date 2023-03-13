///<reference types="cypress" />

import { faker } from "@faker-js/faker";
import BasePage from "./BasePage";


class DeliveryPage extends BasePage {
    chooseDeliverySpeed() {
        cy.get('mat-cell.cdk-column-Name').contains('Standard Delivery').next().click();
    }
    submitContinueDeliveryButton() {
        cy.get('span.mat-button-wrapper').contains('Continue').click();
    }
}
export default new DeliveryPage();