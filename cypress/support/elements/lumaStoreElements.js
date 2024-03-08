class lumaStoreElements {

    homePageUrl = () => {
        return 'https://magento.softwaretestingboard.com/'
    }

    contactFormLink = () => {
        return 'a[href="https://magento.softwaretestingboard.com/sales/guest/form/"]'
    }

    orderIDField = () => {
        return '#oar-order-id'
    }

    orderIDError = () => {
        return '#oar-order-id-error'
    }

    billingLastNameField = () => {
        return '#oar-billing-lastname'
    }

    billingLastNameError = () => {
        return '#oar-billing-lastname-error'
    }

    findOrderByDropdown = () => {
        return '#quick-search-type-id'
    }

    emailField = () => {
        return '#oar_email'
    }

    emailError = () => {
        return '#oar_email-error'
    }

    zipCodeField = () => {
        return '#oar_zip'
    }

    zipCodeError = () => {
        return '#oar_zip-error'
    }

    continueButton = () => {
        return 'button[title="Continue"]'
    }

    orderTitle = () => {
        return 'span[data-ui-id="page-title-wrapper"]'
    }

    messageError = () => {
        return '.message-error'
    }
}

export default lumaStoreElements;
