class LoginPage {
    
    get loginButton1() { 
        return $('//android.view.View[@resource-id="IntroLoginSignInButton"]/android.widget.Button'); 
    }

    get signUpButton() { 
        return $('//android.view.View[@resource-id="IntroLoginSignUpButton"]/android.widget.Button'); 
    }

    get skipButton() { 
        return $('//android.view.View[@resource-id="IntroLoginSkipButton"]/android.widget.Button'); 
    }

    get noAccountChrome() { 
        return $('com.android.chrome:id/signin_fre_dismiss_button")'); 
    }

    get emailField() { 
        return $('//android.widget.EditText[@resource-id="userName"]'); 
    }

    get passwordField() { 
        return $('//android.widget.EditText[@resource-id="password"]'); 
    }

    get loginButton2() { 
        return $('//android.widget.Button[@resource-id="btnLogin"]'); 
    }

    get username() { return "@gmail.com"; }
    get password() { return ""; }

    async login() {
        await this.emailField.setValue(this.username);
        await this.passwordField.setValue(this.password);
        await this.loginButton2.click();
    }
}

module.exports = new LoginPage();