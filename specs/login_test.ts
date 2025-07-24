
import loginPage from "../pages/login/login.page";


Feature('login');

Scenario('test something',  ({ I }) => {
    loginPage.doLogin()
});
