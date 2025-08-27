export const homeElements = {
    btn_address: '~address-button',
    btn_permitir: '//android.widget.Button[@resource-id="android:id/button1"]',
    store_item: '~store-list-item',
    restaurant_select: (name) => `//android.widget.TextView[@text="${name}"]`,
    field_search: '~search-field',
    field_done_address: '//android.widget.TextView[@text="Av. Governador A. Konder, 20"]',
    alert_message: '#android:id/message',
    btn_close_alert: '#android:id/button1'
}

export default homeElements