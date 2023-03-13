///<reference types="cypress" />

import BasePage from "./BasePage";

class OrderCompletionPage extends BasePage {
   assertOrderIsComplete() {
      cy.get('h1.confirmation').should('contain', 'Thank you for your purchase!');
   }

}
export default new OrderCompletionPage();