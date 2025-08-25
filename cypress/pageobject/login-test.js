class login{

    txtusername = "//input[@name='username']"
    txtpassword = "//input[@name='password']"
    login = ".oxd-button"
    forgot_pasword = "//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']"
    reset_pass = "//input[@name='username']"
    btnreset = ".oxd-button--secondary"
    
    //verifikasi value
    InputUsername(usernamevalid)
    {
        cy.xpath(this.txtusername).type("Admin")
    }
    InputPassword(passwordvalid)
    {
       cy.xpath(this.txtpassword).type("admin123")
    }
    submit (btn_login)
    {
        cy.get(this.login).click().should("be.visible")
    }
    forgot_password(forgot)
    {
         cy.xpath(this.forgot_pasword).click()
    }
    reset_password(username_resetpass)
    {
         cy.xpath(this.reset_pass).type("wawampras@gmail.com")
    }
    btn_reset(btnreset)
    {
         cy.get(this.btnreset).click()
    }
    

}
export default login