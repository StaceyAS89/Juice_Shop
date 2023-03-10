import MainPage from "../support/pages/MainPage";
import LoginPage from "../support/pages/LoginPage";
import * as user from "../fixtures/user.json"

it('Login positive', () => {
  MainPage.visit();
  MainPage.submitDismissButtonWelcomeWindow();
  LoginPage.visit();
  LoginPage.assertUserIsNotLogIn();
  LoginPage.submitLoginForm(user);
  LoginPage.assertLoginLocalStorage(user);
  //make order test
  MainPage.submitGetAddToBasketButtonByItemName('Apple Juice');
  MainPage.submitShoppingCartButton();
})

