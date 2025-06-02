import { LoginPage } from "./pages/login.cy.js";

describe('Test Suite login screen',()=>{
    let login
    beforeEach(()=>{
        login = new LoginPage();
        login.goToLoginScreen();
    })
    it('Login without username',()=>{
        login.loginWithoutUser("test");
        login.validateTextWOUsername();
        login.clearPasswordField();
        login.loginWithoutUser("$");
        login.validateTextWOUsername();
        login.clearPasswordField()
        login.loginWithoutUser("secret_sauce ");
        login.validateTextWOUsername();
        login.clearPasswordField()
        login.loginWithoutUser("secret_sauce$");
        login.validateTextWOUsername();
        login.clearPasswordField()
        login.loginWithoutUser(" secret_sauce ");
        login.validateTextWOUsername();
        login.clearPasswordField()
        login.loginWithoutUser("secret_sauce 1");
        login.validateTextWOUsername();
        login.clearPasswordField()
    }       
    )
    it('Login without password',()=>{
        login.loginWithoutPassword("test");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("$");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("%");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("standard_user ");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword(" standard_user");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("standard_user%");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("locked_out_user ");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword(" locked_out_user");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("locked_out_user%");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("problem_user ");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword(" problem_user");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("problem_user%");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword(" performance_glitch_user");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("performance_glitch_user ");
        login.validateTextWOPassword();
        login.clearUserField();
        login.loginWithoutPassword("performance_glitch_user%");
        login.validateTextWOPassword();
        login.clearUserField();
    })
    it('Log in with incorrect credentials', ()=>{
        login.incorrectCredentials();

    })
})