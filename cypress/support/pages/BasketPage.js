import BasePage from "./BasePage";

class BasketPage extends BasePage {
    visit() {
        cy.visit('/#/basket')
    }
    submitDismissButtonWelcomeWindow() {
        cy.get('button[color="primary"]').click();
    }
    setCookieDismissWelcomeWindow() {
        cy.getCookies();
        cy.setCookie('welcomebanner_status', 'dismiss');
    }
    submitCheckoutButton() {
        cy.get('button#checkoutButton').click();
    }

    submitGetAddToBasketButtonByItemName(itemName) {
        return cy.contains(`${itemName}`).parent().parent().next().children().click();
    }
    submitShoppingCartButton() {
        cy.get('[aria-label="Show the shopping cart"]').click();
    }

    assertItemIsAddedToBasket(itemName) {
        cy.get('.cdk-cell.cdk-column-product').should('contain', `${itemName}`)
    }



}
export default new BasketPage();