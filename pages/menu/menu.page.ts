import menuElements from "./menu.elements";

const { I } = inject()

export class menuPage {

    massText = {
        textMenu: 'Cardápio'
    }
    validateGoMenu(index) {
        I.waitForElement({ xpath: menuElements.item_title(index) }, 5)
        I.see(this.massText.textMenu)
    }

    validateSelectItem(index, nameItem) {
        const xpath = { xpath: menuElements.item_title(index) }
        const btnAddItem = locate(menuElements.btn_add_item).at(index)

        I.waitForElement(xpath, 5)
        I.see(nameItem, xpath)

        I.waitForElement(menuElements.btn_add_item, 5)
        I.click(btnAddItem)
    }

    clickGotoCart() {
        I.waitForElement(menuElements.btn_open_cart, 5)
        I.click(menuElements.btn_open_cart)
    }

    validatePriceItem(index, data) {
        const valueItem = data.valueItem || '12.00'
        const valueDrink = data.valueDrink || '10.00'

        const elementPrice = { xpath: menuElements.item_price(index) }

        I.waitForElement(elementPrice, 5)
        I.see(valueItem, elementPrice)

        // I.performSwipe({ x: 600, y: 1500 }, { x: 600, y: 400 })
        // I.performSwipe({ x: 600, y: 1500 }, { x: 600, y: 400 })
        // I.waitForElement(menuElements.item_price(6))
        // I.see(valueDrink, menuElements.item_price(6))
    }

}

export default new menuPage()