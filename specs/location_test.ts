import homePage from "../pages/home/home.page"
import loginPage from "../pages/login/login.page"
import menuPage from "../pages/menu/menu.page"


Feature('Tests QAfood Location')

const restaurant = 'Churrascaria Gaúcha'

Before(() => {
    loginPage.doLogin({})

})
Scenario('test input confirm address', () => {
    homePage.inputAddress()
    homePage.confirmDoneAddress()
}).tag('@confirm_address')

Scenario('test fail input address', () => {
    homePage.selectRestaurant(restaurant)
    homePage.alertMessageAddress()
    homePage.closeAlert()
}).tag('@fail_address')

Scenario('test input Address and select Restaurant', () => {
    homePage.inputAddress()
    homePage.selectRestaurant(restaurant)
    menuPage.validateGoMenu(1)
}).tag('@address_restaurant')