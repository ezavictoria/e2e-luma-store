# Automated Testing for Luma Store
This repository contains an automation project using Cypress and Cucumber for testing the Luma Store.

## Running the Tests
First of all, Node.js needs to be installed on the computer.

Before running the tests you need to install node in the project folder with the following command in the terminal:
```bash
npm install
```

To execute the tests in the terminal, use the following command:
```bash
npm run test
```

To run the tests in the Cypress graphical interface use:
```bash
npx cypress open
```

## Test Observations
All tests have successfully passed, confirming the proper functionality of the Luma Store contact form. The scenarios involving finding orders by email and ZIP Code, handling invalid data, and checking required fields have all exhibited the expected behavior.

## Detailed Analysis
The testing process covered various aspects of the contact form, including successful order retrieval, proper error handling for invalid data, and correct validation of required fields. Each scenario executed without issues, indicating that the application's contact form functionality is robust and reliable.

## Identified Issues
No issues were identified during the testing process. All scenarios executed as expected, and the application behaved consistently across different test cases.

## Recommendations
Given that all tests passed successfully, no specific recommendations are provided at this time. However, it is advisable to continue monitoring and updating the tests as the application evolves to ensure ongoing accuracy and reliability.

## Comments
The testing approach aimed to comprehensively validate the contact form functionality, covering various use cases. All scenarios, including finding orders by email and ZIP Code, handling invalid data, and checking required fields, were successfully executed, affirming the stability of the Luma Store contact form.

