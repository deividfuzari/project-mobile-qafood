import paymentElements from "./payment.elements"

const { I } = inject()
import { expect } from 'chai';

export class paymentPage {
    massText = {
        textCupom: 'Cupom',
        textMoney: 'Dinheiro',
        textDoOrder: 'FAZER PEDIDO',
        textSuccsess: 'Pedido realizado',
        textStatus: 'O pedido está sendo preparado e logo sairá para a entrega'
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
}

export default new paymentPage()