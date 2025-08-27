import paymentElements from "./payment.elements"
import { expect } from 'chai';

const { I } = inject()

export class paymentPage {
    massText = {
        textCupom: 'Cupom',
        textMoney: 'Dinheiro',
        textDoOrder: 'FAZER PEDIDO',
        textSuccsess: 'Pedido realizado',
        textStatus: 'O pedido está sendo preparado e logo sairá para a entrega',
        textCupomError: 'CUPOM inválido',
        textSelectPayment: 'Selecione uma forma de pagamento'
    }
    validatePagePayment() {
        I.waitForElement(paymentElements.field_cupom, 10)
        I.see(this.massText.textCupom)
    }

    choiceMoneyPay() {
        I.performSwipe({ x: 700, y: 1700 }, { x: 700, y: 800 })

        I.waitForElement(paymentElements.radio_money, 10)
        I.see(this.massText.textMoney, paymentElements.radio_money)
        I.click(paymentElements.radio_money)

        I.waitForElement(paymentElements.btn_finish, 10)
        I.see(this.massText.textDoOrder, paymentElements.text_doOrder)
        I.click(paymentElements.btn_finish)
    }

    async validateSuccsessOrder() {
        I.waitForElement(paymentElements.text_succsess, 10)

        const textSuccsess = await I.grabTextFrom(paymentElements.text_succsess)

        I.waitForElement(paymentElements.text_status, 10)
        const textStatus = await I.grabTextFrom(paymentElements.text_status)

        expect(textStatus).to.equal(this.massText.textStatus)
        expect(textSuccsess).to.equal(this.massText.textSuccsess)
    }

    tryUseCupom(data) {
        const cupom = data.cupom || '123456'

        I.waitForElement(paymentElements.field_cupom, 10)
        I.fillField(paymentElements.field_cupom, cupom)
        I.waitForElement(paymentElements.btn_add_cupom, 10)
        I.click(paymentElements.btn_add_cupom)
    }

    validateErrorCupom() {
        I.waitForElement(paymentElements.text_cupom_invalid, 10)
        I.see(this.massText.textCupomError, paymentElements.text_cupom_invalid)
    }

    tryBuyDirect() {
        I.waitForElement(paymentElements.btn_finish, 10)
        I.see(this.massText.textDoOrder, paymentElements.text_doOrder)
        I.click(paymentElements.btn_finish)

        I.waitForElement(paymentElements.btn_ok, 10)
        I.see(this.massText.textSelectPayment)
        I.click(paymentElements.btn_ok)
    }
}

export default new paymentPage()