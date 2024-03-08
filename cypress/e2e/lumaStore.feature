Feature: Contact form

    Background: Access the contact form
        Given that the user accesses the home page
        And accesses the contact form

    Scenario: Find an order by email
        When fills in the form with valid information - Find by email
        And clicks on the continue button
        Then the order information must be found

    Scenario: Find an order by ZIP Code
        When fills in the form with valid information - Find by ZIP Code
        And clicks on the continue button
        Then the order information must be found

    Scenario: Filling in the form with invalid data
        When fills in the form with invalid information
        And clicks on the continue button
        Then an error message should be displayed

    Scenario: Check required fields
        When clicks on the continue button
        And checks the error message
        Then required field messages must be displayed

