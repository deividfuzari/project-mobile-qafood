import loginPage from "../pages/login/login.page";
import homePage from "../pages/home/home.page";
import menuPage from "../pages/menu/menu.page";
import cartPage from "../pages/cart/cart.page";
import paymentPage from "../pages/payment/payment.page";

const steakhouse = 'Churrascaria Gaúcha'
const burgerJoint = 'Bulldog Hamburgueria'
const nameBurger = 'Hamburguer de frango'
const valueBurger = '22,00'
const valueDrink = '5,00'

Feature('Tests QAfood Restaurants')

Before(() => {
    loginPage.doLogin({})
    homePage.inputAddress()
})

Scenario('test validate name Item and Add to cart', () => {
    homePage.selectRestaurant(burgerJoint)
    menuPage.validateGoMenu(1)
    menuPage.validatePriceItem(1, { valueItem: valueBurger, valueDrink: valueDrink })
    menuPage.validateSelectItem(1, nameBurger)
    menuPage.clickGotoCart()
    cartPage.validateNameItemCart(nameBurger, 1)
    cartPage.validatePriceItemCart(valueBurger, 1)
    cartPage.confirmOrder()
    paymentPage.validatePagePayment()
}).tag('@add_item_to_cart')

Scenario('Validate item bag and remove item', () => {
    homePage.selectRestaurant(steakhouse)
    menuPage.validateGoMenu(1)
    menuPage.validateBagEmpty()
    menuPage.choiceNewItem(6)
    menuPage.clickGotoCart()
    menuPage.removeItemBag()
}).tag('@remove_item')