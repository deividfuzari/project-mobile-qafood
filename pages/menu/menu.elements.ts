export const menuElements = {
    item_title: (index) => `(//android.widget.TextView[@content-desc="item-title"])[${index}]`,
    btn_add_item: '//*[@content-desc="add-item-buttom"]',
    btn_add_item_locale : (index : any) => locate(`(//android.view.ViewGroup[@content-desc="add-item-buttom"])[${index}]`),
    item_price: (index) => `(//android.widget.TextView[@content-desc="item-price"])[${index}]`,
    btn_open_cart: '~open-cart-button',
    field_bag_empty: '//android.widget.TextView[@text="Você não possui produtos no carrinho!"]',
    btn_add_item_on_bag: '~adicionar-itens-cart-button',
    btn_remove_item: '//android.widget.TextView[@text="Limpar"]',
    btn_confirm_remove: '#android:id/button1'
}

export default menuElements