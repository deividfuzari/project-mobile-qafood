
import loginPage from "../pages/login/login.page";
import homePage from "../pages/home/home.page";
import menuPage from "../pages/menu/menu.page";
import menuElements from "../pages/menu/menu.elements";
import cartPage from "../pages/cart/cart.page";
import paymentPage from "../pages/payment/payment.page";

const { I } = inject()

Feature('Test QAfood');

Scenario('test validate login', () => {
    loginPage.doLogin({})
    homePage.validateLogin()
});

Scenario('test login fail', () => {
    loginPage.doLogin({ password: '12345' })
    loginPage.validateLoginError()
})

Scenario('test input Address and select Restaurant', () => {
    loginPage.doLogin({})
    homePage.inputAddress()
    homePage.selectRestaurant('Churrascaria Gaúcha')
    menuPage.validateGoMenu(1)
}).tag('@address_restaurant')

Scenario('test validate name Item and Add to cart', () => {
    loginPage.doLogin({})
    homePage.inputAddress()
    homePage.selectRestaurant('Bulldog Hamburgueria')
    menuPage.validateGoMenu(1)
    menuPage.validatePriceItem(1, { valueItem: '22,00', valueDrink: '5,00' })
    menuPage.validateSelectItem(1, 'Hamburguer de frango')
    menuPage.clickGotoCart()
    cartPage.validateNameItemCart('Hamburguer de frango', 1)
    cartPage.validatePriceItemCart('22,00', 1)
    cartPage.confirmOrder()
    paymentPage.validatePagePayment()
}).tag('@add_item_to_cart')

Scenario('finish purchase item on QAfood', async () => {
    loginPage.doLogin({})
    homePage.inputAddress()
    homePage.selectRestaurant('Bulldog Hamburgueria')
    menuPage.validateGoMenu(1)
    menuPage.validatePriceItem(1, { valueItem: '22,00', valueDrink: '5,00' })
    menuPage.validateSelectItem(1, 'Hamburguer de frango')
    menuPage.clickGotoCart()
    cartPage.validateNameItemCart('Hamburguer de frango', 1)
    cartPage.validatePriceItemCart('22,00', 1)
    cartPage.confirmOrder()
    paymentPage.validatePagePayment()
    paymentPage.choiceMoneyPay()
    await paymentPage.validateSuccsessOrder()
    I.wait(5)
}).tag('@finish_order')