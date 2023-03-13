///<reference types="cypress" />


import BasePage from "./BasePage";


class OrderSummaryPage extends BasePage {
    visit() {
        cy.visit('/#/order-summary');
    }
    assertOrderItem(itemName) {
        cy.get('.mat-cell.cdk-column-product.mat-column-product').should('contain', `${itemName}`);
    }
    submitCheckoutButton() {
        cy.get('#checkoutButton').click();
    }
}
export default new OrderSummaryPage();