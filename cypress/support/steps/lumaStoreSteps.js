import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import lumaStoreElements from "../elements/lumaStoreElements";
const LumaStoreElements = new lumaStoreElements()

const orderID = Cypress.env('orderID')

/* Given Steps */
Given("that the user accesses the home page", () => {
    cy.visit(LumaStoreElements.homePageUrl())
  });

Given("accesses the contact form", () => {
    cy.get(LumaStoreElements.contactFormLink()).click()
})

/* When Steps */
When("fills in the form with valid information - Find by email", () => {
    cy.fillInTheForm('Email', orderID)
})

When("fills in the form with valid information - Find by ZIP Code", () => {
    cy.fillInTheForm('ZIP Code', orderID)
})

When("fills in the form with invalid information", () => {
    cy.generateRandomId(9).then((randomId) => {
        cy.fillInTheForm('Email', randomId);
    })
})

When("clicks on the continue button", () => {
    cy.get(LumaStoreElements.continueButton()).click()
})

When('checks the error message', () => {
    cy.get(LumaStoreElements.messageError()).should('be.visible').then(($errorElement) => {
        cy.get(LumaStoreElements.continueButton()).click();
    })
})

When("reloads the page", () => {
    cy.reload()
})

/* Then Steps */
Then("the order information must be found", () => {
    const orderID = Cypress.env('orderID')

    cy.get(LumaStoreElements.orderTitle()).should('have.text', `Order # ${orderID}`)
})

Then("an error message should be displayed", () => {
    cy.get(LumaStoreElements.messageError()).should('be.visible')
})

Then("required field messages must be displayed", () => {
    cy.checkRequiredFields()
})

