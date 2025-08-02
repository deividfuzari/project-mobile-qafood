import cartElements from "./cart.elements"

const {I} = inject()

export class cartPage {

    validateNameItemCart(item, index) {
        const itemCartElement ={ xpath: cartElements.text_item_cart(item, index)}

        I.waitForElement(itemCartElement, 10)
        I.see(item, itemCartElement)
    }

    validatePriceItemCart(price, index){
        const priceCartElement = {xpath: cartElements.value_item_cart(price, index)}

        I.waitForElement(priceCartElement, 10)
        I.see(price, priceCartElement)

        I.waitForElement(cartElements.total_value_cart, 10)
        I.see(price, cartElements.total_value_cart)
    }

    confirmOrder() {
        I.waitForElement(cartElements.btn_finalize_cart, 10)
        I.seeElement(cartElements.btn_finalize_cart)
        I.click(cartElements.btn_finalize_cart)
    }
}

export default new cartPage()