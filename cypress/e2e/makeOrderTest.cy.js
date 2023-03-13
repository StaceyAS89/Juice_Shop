import MainPage from "../support/pages/MainPage";
import LoginPage from "../support/pages/LoginPage";
import BasketPage from "../support/pages/BasketPage";
import AddressPage from "../support/pages/AddressPage";
import DeliveryPage from "../support/pages/DeliveryPage";
import PaymentPage from "../support/pages/PaymentPage";
import OrderSummaryPage from "../support/pages/OrderSummaryPage";



import * as user from "../fixtures/user.json";
import OrderCompletionPage from "../support/pages/OrderCompletionPage";
import { headLessLogin } from "../support/helper";


let itemName = 'Apple Juice'

it('Make order', () => {
  MainPage.visit();
  MainPage.submitDismissButtonWelcomeWindow();
  cy.log("Logging")
  LoginPage.visit();
  LoginPage.assertUserIsNotLogIn();
  headLessLogin(user)
  LoginPage.submitLoginForm(user);
  LoginPage.assertLoginLocalStorage(user);

  cy.log("Add product to the basket")
  MainPage.submitGetAddToBasketButtonByItemName(`${itemName}`);
  MainPage.submitShoppingCartButton();
  BasketPage.assertItemIsAddedToBasket(itemName);
  BasketPage.submitCheckoutButton();
  cy.wait(2000)
  AddressPage.assertItemCheckoutSubmit(itemName);

  AddressPage.submitAddNewAddressForm();
  AddressPage.assertAddressIsAdded();

  AddressPage.selectAddress();
  AddressPage.submitContinueButton();
  DeliveryPage.chooseDeliverySpeed();
  DeliveryPage.submitContinueDeliveryButton();
  PaymentPage.assertDeliveryIsAdded();
  PaymentPage.submitAddNewCardButton();
  PaymentPage.submitAddNewCard();
  PaymentPage.assertCardIsAdded();
  PaymentPage.chooseAddedCard();
  PaymentPage.submitPaymentOption();
  OrderSummaryPage.assertOrderItem(itemName);
  OrderSummaryPage.submitCheckoutButton();
  OrderCompletionPage.assertOrderIsComplete();
})

