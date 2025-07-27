
import loginPage from "../pages/login/login.page";
import homePage from "../pages/home/home.page";
import menuPage from "../pages/menu/menu.page";

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

Scenario('test validate name Item and Add to cart',() =>{
    loginPage.doLogin({})
    homePage.inputAddress()
    homePage.selectRestaurant('Bulldog Hamburgueria')
    menuPage.validateGoMenu(1)
    menuPage.validateSelectItem(1, 'Hamburguer de frango')
}).tag('@add_item_to_cart')