export const cartElements = {
    total_value_cart: '~total-order-cart',
    btn_finalize_cart: '~confirm-order-button',
    text_item_cart: (item: any, index: any) => `(//android.widget.TextView[@text="${item}"])[${index}]`,
    value_item_cart: (price: any, index: any) => `(//android.widget.TextView[@text="R$ ${price}"])[${index}]`,
}

export default cartElements