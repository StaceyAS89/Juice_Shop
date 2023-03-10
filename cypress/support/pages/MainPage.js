import BasePage from "./BasePage";

class MainPage extends BasePage {
    visit() {
        cy.visit('/')
    }
    submitDismissButtonWelcomeWindow() {
        cy.get('[aria-label="Close Welcome Banner"]').click({ multiple: true });
    }
    setCookieDismissWelcomeWindow() {
        cy.getCookies();
        cy.setCookie('welcomebanner_status', 'dismiss');
    }
    getAddToBasketButton() {
        return cy.get('[aria-label="Add to Basket"]', { multiple: true })
    }
    submitgetAddToBasketButton() {
        this.getAddToBasketButton().click();
    }
    submitGetAddToBasketButtonByItemName(itemName) {
        return cy.contains(`${itemName}`).parent().parent().next().children().click();
    }
    submitShoppingCartButton() {
        cy.get('[aria-label="Show the shopping cart"]').click();
    }
}
export default new MainPage();