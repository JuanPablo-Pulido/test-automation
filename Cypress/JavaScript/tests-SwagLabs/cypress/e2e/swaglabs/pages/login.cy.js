import { loginLocators } from "./locators/login";
import { BasePage } from "./basePage";
export class LoginPage{
    constructor(){
        this.base=new BasePage();
    }

    async goToLoginScreen(){
        this.base.loadWeb("https://www.saucedemo.com/v1/")
    }
    async clearUserField(){
        this.base.clearShield(loginLocators.username)
    }
    async clearPasswordField(){
        this.base.clearShield(loginLocators.password)
    }
    async loginWithoutUser(password){
        this.base.fillShield(loginLocators.password,password);
        this.base.clickOn(loginLocators.loginButton);
    }
    async loginWithoutPassword(user){
        this.base.fillShield(loginLocators.username,user);
        this.base.clickOn(loginLocators.loginButton);
    }

    async validateTextWOUsername(){
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username is required")
    }
    async validateTextWOPassword(){
        this.base.validateText(loginLocators.texterror,"Epic sadface: Password is required")
    }

    async login(user, password){
        this.base.fillShield(loginLocators.username,user);
        this.base.fillShield(loginLocators.password,password);
        this.base.clickOn(loginLocators.loginButton);
    }

    async incorrectCredentials(){
        this.login("test","test");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
        this.login("standard_user ","secret_sauce ");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
        this.login(" standard_user"," secret_sauce");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
        this.login("standard_user#","secret_sauce%");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();

        this.login("locked_out_user ","secret_sauce ");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
        this.login(" locked_out_user"," secret_sauce");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
        this.login("locked_out_user#","secret_sauce%");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();

        this.login("problem_user ","secret_sauce ");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
        this.login(" problem_user"," secret_sauce");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
        this.login("problem_user#","secret_sauce%");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();

        this.login("performance_glitch_user ","secret_sauce ");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
        this.login(" performance_glitch_user"," secret_sauce");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
        this.login("performance_glitch_user#","secret_sauce%");
        this.base.validateText(loginLocators.texterror,"Epic sadface: Username and password do not match any user in this service");
        this.clearUserField();
        this.clearPasswordField();
    }
}