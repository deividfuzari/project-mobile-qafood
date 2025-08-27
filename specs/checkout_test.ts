import loginPage from "../pages/login/login.page";
import homePage from "../pages/home/home.page";
import menuPage from "../pages/menu/menu.page";
import menuElements from "../pages/menu/menu.elements";
import cartPage from "../pages/cart/cart.page";
import paymentPage from "../pages/payment/payment.page";

const { I } = inject()
const burgerJoint = 'Bulldog Hamburgueria'
const nameBurger = 'Hamburguer de frango'
const valueBurger = '22,00'
const valueDrink = '5,00'

Feature('Tests QAfood Checkout')

Before(()=> {
    loginPage.doLogin({})
    homePage.inputAddress()
    homePage.selectRestaurant(burgerJoint)
    menuPage.validateGoMenu(1)
    menuPage.validatePriceItem(1, { valueItem: valueBurger, valueDrink: valueDrink })
    menuPage.validateSelectItem(1, nameBurger)
    menuPage.clickGotoCart()
    cartPage.validateNameItemCart(nameBurger, 1)
    cartPage.validatePriceItemCart(valueBurger, 1)
    cartPage.confirmOrder()
    paymentPage.validatePagePayment()
})

Scenario('finish purchase item on QAfood', async () => {
    paymentPage.choiceMoneyPay()
    await paymentPage.validateSuccsessOrder()
    I.wait(5)
}).tag('@finish_order')

Scenario('validate fail cupom and ', () => {
    paymentPage.tryUseCupom({})
    paymentPage.validateErrorCupom()
}).tag('@try_use_cupom')

Scenario('validate try to buy without choosing a payment method', () => {
    paymentPage.tryBuyDirect()
    paymentPage.validatePagePayment()
}).tag('@try_buy')