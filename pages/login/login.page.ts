import loginElements from "./login.elements"

const { I } = inject()

export class loginPage {

    stringTest = {
        messageError: 'Erro ao realizar login',

    }

    doLogin(data) {
        const email = data.email || 'teste@teste.com'
        const password = data.password || '123456'

        I.waitForElement(loginElements.filed_email, 5)
        I.fillField(loginElements.filed_email, email)
        I.fillField(loginElements.field_password, password)
        I.waitForElement(loginElements.btn_entrar, 5)
        I.click(loginElements.btn_entrar)
    }

    validateLoginError() {
        I.waitForElement(loginElements.message_error)
        I.see(this.stringTest.messageError)
    }
}

export default new loginPage()