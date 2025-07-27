import menuElements from "./menu.elements";
const { I } = inject()


export class menuPage {
    validateGoMenu(index) {
        I.waitForElement({ xpath: menuElements.item_title(index) }, 5)
        I.see('Cardápio')
    }

    validateSelectItem(index, nameItem) {
        const xpath = { xpath: menuElements.item_title(index) }
        const btnAddItem = locate(menuElements.btn_add_item).at(index)

        I.waitForElement(xpath, 5)
        I.see(nameItem, xpath)

        I.waitForElement(menuElements.btn_add_item, 5)
        I.click(btnAddItem)
        I.wait(2)
        I.waitForElement(menuElements.btn_open_cart, 5)
        I.click(menuElements.btn_open_cart)
        I.wait(2)
    }


}

export default new menuPage()