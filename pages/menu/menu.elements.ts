export const menuElements = {
    item_title: (index) => `(//android.widget.TextView[@content-desc="item-title"])[${index}]`,
    btn_add_item: '//*[@content-desc="add-item-buttom"]',
    item_price: (index) => `(//android.widget.TextView[@content-desc="item-price"])[${index}]`,
    btn_open_cart: '~open-cart-button',
}

export default menuElements