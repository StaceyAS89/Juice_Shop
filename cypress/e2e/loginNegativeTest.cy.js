import MainPage from "../support/pages/MainPage";
import LoginPage from "../support/pages/LoginPage";
import * as user from "../fixtures/user.json"

it('Login with empty email', () => {
  MainPage.visit();
  MainPage.submitDismissButtonWelcomeWindow();
  LoginPage.visit();
  LoginPage.assertUserIsNotLogIn();
  LoginPage.submitLoginFormWithEmptyEmail(user);
  LoginPage.assertSubmitloginFormWithEmptyEmail();
})

it('Login with empty password', () => {
  MainPage.visit();
  MainPage.submitDismissButtonWelcomeWindow();
  LoginPage.visit();
  LoginPage.assertUserIsNotLogIn();
  LoginPage.submitLoginFormWithEmptyPassword(user);
  LoginPage.assertSubmitloginFormWithEmptyPassword();

})

it('Login with invalid email', () => {
  MainPage.visit();
  MainPage.submitDismissButtonWelcomeWindow();
  LoginPage.visit();
  LoginPage.assertUserIsNotLogIn();
  LoginPage.submitLoginFormWithInvalidEmail(user)
  LoginPage.assertSubmitLoginFormWithInvalidEmaiPassword();

})

it('Login with invalid password', () => {
  MainPage.visit();
  MainPage.submitDismissButtonWelcomeWindow();
  LoginPage.visit();
  LoginPage.assertUserIsNotLogIn();
  LoginPage.submitLoginFormWithInvalidPassword(user);
  LoginPage.assertSubmitLoginFormWithInvalidEmaiPassword();

})
