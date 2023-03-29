import { BasePage } from "./base.page";
import { ElementActions } from "../core/element-actions";
export class LoginPage extends BasePage {

    private email: string = '//div/input[@id="element-0"]';
    private password: string = '//div/input[@type="password"]';
    private loginButton: string = 'button[data-gtm-id="start-email-login"]';
    constructor() {
        super()
    }
    async setUserName(user: string) {
        await ElementActions.setText(this.email, user)
    }
    async setPassword(pass: string) {
        await ElementActions.setText(this.password, pass)
    }
    async submitLogin() {
        await ElementActions.click(this.loginButton)
    }
    async login(user: string, pass: string) {
        await this.setUserName(user)
        await this.setPassword(pass)
        await this.submitLogin()
    }
    
}
export const loginPage = new LoginPage();