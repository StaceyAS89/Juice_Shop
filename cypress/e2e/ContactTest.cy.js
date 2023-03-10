import MainPage from "../support/pages/MainPage";
import ContactPage from "../support/pages/ContactPage";

it('Contact Test', () => {
  ContactPage.visit();
  MainPage.submitDismissButtonWelcomeWindow();
  ContactPage.submitContactForm();
  ContactPage.assertSubmitContactForm();
})
