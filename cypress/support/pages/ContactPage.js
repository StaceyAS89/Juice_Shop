///<reference types="cypress">
// import * as user from "../fixtures/user.json"
import { faker } from "@faker-js/faker";
import BasePage from "./BasePage";

class ContactPage extends BasePage {
    constructor() {
        super();
        this.comment = faker.lorem.paragraph();

    }
    visit() {
        cy.log('Open website contact page');
        cy.visit('/#/contact');
    }
    getCommentField() {
        return cy.get('#comment');
    }
    getRatingSlider() {
        return cy.get('div.mat-slider-thumb');
    }
    getRatingSlider() {
        return cy.get('#rating')
    }

    submitCaptchaAnswer() {
        cy.get('code#captcha').then(elemenet => {
            let captchaText = elemenet[0].innerHTML;
            let captchaResult = eval(captchaText);
            cy.get('#captchaControl').type(captchaResult);
        })
    }
    submitSubmitButton() {
        cy.get('button#submitButton').click();
    }

    submitContactForm() {
        this.getCommentField().type(this.comment);
        this.getRatingSlider().type('{rightArrow}{rightArrow}{leftArrow}')
        this.submitCaptchaAnswer();
        this.submitSubmitButton();
    }
    assertSubmitContactForm() {
        cy.get('span.mat-simple-snack-bar-content').should('contain', 'Thank you for your feedback.')
    }
}

export default new ContactPage();