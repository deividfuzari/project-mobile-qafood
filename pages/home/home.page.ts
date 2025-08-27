import homeElements from "./home.elements";

const { I } = inject()

export class homePage {

    massText = {
        textStore: 'Lojas',
        textAddress: 'Av. Governador A. Konder, 20',
        textAlert: 'Ops... Selecione o endereço para continuar'
    }

    validateLogin() {
        I.waitForElement(homeElements.btn_address, 5)
        I.see(this.massText.textStore)
    }

    inputAddress() {
        I.waitForElement(homeElements.btn_address, 5)
        I.click(homeElements.btn_address)
        I.waitForElement(homeElements.btn_permitir, 5)
        I.click(homeElements.btn_permitir)
    }

    confirmDoneAddress() {
        I.waitForElement(homeElements.field_done_address, 10)
        I.see(this.massText.textAddress, homeElements.field_done_address)
    }

    alertMessageAddress() {
        I.waitForElement(homeElements.alert_message, 10)
        I.see(this.massText.textAlert, homeElements.alert_message)
    }

    closeAlert() {
        I.waitForElement(homeElements.btn_close_alert, 10)
        I.seeElement(homeElements.btn_close_alert)
        I.click(homeElements.btn_close_alert)
    }

    selectRestaurant(nameRestaurant) {
        I.performSwipe({ x: 600, y: 1500 }, { x: 600, y: 400 })
        I.waitForElement(homeElements.restaurant_select(nameRestaurant))
        I.click(homeElements.restaurant_select(nameRestaurant))
    }
}

export default new homePage()