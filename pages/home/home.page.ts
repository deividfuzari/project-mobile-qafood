const {I} = inject()

import homeElements from "./home.elements";

export class homePage {

    validateLogin() {
        I.waitForElement(homeElements.btn_address, 5)
        I.see('Lojas')
    }

    inputAddress() {
        I.waitForElement(homeElements.btn_address, 5)
        I.click(homeElements.btn_address)
        I.waitForElement(homeElements.btn_permitir, 5)
        I.click(homeElements.btn_permitir)
    }

    selectRestaurant(nameRestaurant) {
        I.performSwipe({x: 600, y: 1500}, {x: 600, y: 400})
        I.waitForElement(homeElements.restaurant_select(nameRestaurant))
        I.click(homeElements.restaurant_select(nameRestaurant))
    }
}

export default new homePage()