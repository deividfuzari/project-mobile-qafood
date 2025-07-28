export const menuElements = {
    item_title: (index) => `(//android.widget.TextView[@content-desc="item-title"])[${index}]`,
    btn_add_item: '//*[@content-desc="add-item-buttom"]',
    item_price: (index)=> `(//android.widget.TextView[@content-desc="item-price"])[${index}]`,
    btn_open_cart: '~open-cart-button',
    total_value_cart: '~total-order-cart',
    btn_finalize_cart: '~confirm-order-button',
}

export default menuElements