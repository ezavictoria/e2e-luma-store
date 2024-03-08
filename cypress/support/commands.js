import lumaStoreElements from "./elements/lumaStoreElements"
const LumaStoreElements = new lumaStoreElements()

const lastName = Cypress.env('lastName')
const email = Cypress.env('email')
const zipCode = Cypress.env('zipCode')

Cypress.Commands.add('fillInTheForm', (dropdownOption, orderID) => {
    cy.get(LumaStoreElements.orderIDField()).type(orderID, {log: false})
    cy.get(LumaStoreElements.billingLastNameField()).type(lastName, {log: false})
    cy.get(LumaStoreElements.findOrderByDropdown()).select(dropdownOption)
    if (dropdownOption == 'Email'){
        cy.get(LumaStoreElements.emailField()).type(email, {log: false})
    } else if (dropdownOption == 'ZIP Code'){
        cy.get(LumaStoreElements.zipCodeField()).type(zipCode, {log: false})
    }
})
    
Cypress.Commands.add('generateRandomId', (length) => {
    let result = '';
    const characters = '0123456789';
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result;
  });

Cypress.Commands.add('checkRequiredFields', () => {
    cy.get(LumaStoreElements.orderIDError()).should('have.text', 'This is a required field.')
    cy.get(LumaStoreElements.billingLastNameError()).should('have.text', 'This is a required field.')
    cy.get(LumaStoreElements.emailError()).should('have.text', 'This is a required field.')
    cy.get(LumaStoreElements.findOrderByDropdown()).select('ZIP Code')
    cy.get(LumaStoreElements.continueButton()).click()
    cy.get(LumaStoreElements.zipCodeError()).should('have.text', 'This is a required field.')
})