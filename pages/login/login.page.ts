const {I} = inject()

import loginElements from "./login.elements"

export class loginPage {
    doLogin() {
        I.waitForElement(loginElements.filed_email, 5)
        I.fillField(loginElements.filed_email, 'teste@teste.com')
        I.fillField(loginElements.field_password, '123456')
        I.waitForElement(loginElements.btn_entrar, 5)
        I.click(loginElements.btn_entrar)
    }
}

export default new loginPage()