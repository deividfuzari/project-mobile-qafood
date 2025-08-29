
import loginPage from "../pages/login/login.page";
import homePage from "../pages/home/home.page";

Feature('Tests QAfood Login');

Scenario('test validate login', () => {
    loginPage.doLogin({})
    homePage.validateLogin()
}).tag('@login_succsess')

Scenario('test login fail', () => {
    loginPage.doLogin({ password: '12345' })
    loginPage.validateLoginError()
}).tag('@login_fail')