
import loginPage from "../pages/login/login.page";
import homePage from "../pages/home/home.page";

const {I} = inject()

Feature('Test QAfood');

Scenario('test validate login',  () => {
    loginPage.doLogin({})
    homePage.validateLogin()
});

Scenario('test login fail', () => {
    loginPage.doLogin({password: '12345'})
    loginPage.validateLoginError()
})

Scenario('test input Address and select Restaurant', () => {
    loginPage.doLogin({})
    homePage.inputAddress()
    homePage.selectRestaurant('Churrascaria Gaúcha')
    I.wait(5)
}).tag('@address_restaurant')
