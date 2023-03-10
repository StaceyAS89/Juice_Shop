import RegistrationPage from "../support/pages/RegistrationPage";
import MainPage from "../support/pages/MainPage"

it('Registration', () => {
  MainPage.visit();
  MainPage.submitDismissButtonWelcomeWindow();
  RegistrationPage.visit();
  RegistrationPage.submitUserRegistrationForm();
  RegistrationPage.assertSubmitUserRegistrationForm();
})
