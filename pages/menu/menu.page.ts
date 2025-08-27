import menuElements from "./menu.elements";

const { I } = inject()

export class menuPage {

    massText = {
        textMenu: 'Cardápio',
        textBagEmpty: 'Você não possui produtos no carrinho!',
        textOrderTotal: 'Total do pedido'
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

    validateBagEmpty() {
        I.waitForElement(menuElements.btn_open_cart, 10)
        I.click(menuElements.btn_open_cart)

        I.waitForElement(menuElements.field_bag_empty, 10)
        I.see(this.massText.textBagEmpty, menuElements.field_bag_empty)

        I.waitForElement(menuElements.btn_add_item_on_bag, 10)
        I.click(menuElements.btn_add_item_on_bag)
    }

    choiceNewItem(index) {
        I.performSwipe({ x: 600, y: 1500 }, { x: 600, y: 400 })
        I.performSwipe({ x: 600, y: 1500 }, { x: 600, y: 400 })
        I.waitForElement(menuElements.btn_add_item_locale(index), 10)
        I.click(menuElements.btn_add_item_locale(index))
    }

    removeItemBag() {
        I.waitForElement(menuElements.btn_remove_item, 10)
        I.see(this.massText.textOrderTotal)
        I.click(menuElements.btn_remove_item)
        I.waitForElement(menuElements.btn_confirm_remove, 10)
        I.click(menuElements.btn_confirm_remove)

        I.waitForElement(menuElements.field_bag_empty, 10)
        I.see(this.massText.textBagEmpty, menuElements.field_bag_empty)
    }

}

export default new menuPage()