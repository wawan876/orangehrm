import login from "../pageobject/login-test";



describe('', () => {

    it('username valid & password valid', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.fixture("login").then((data)=>{

            //panggil varible class
            const ln =new login()
            ln.InputUsername("Admin")
            ln.InputPassword("admi123")
            cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('Dashboard')
            ln.submit()
            cy.wait('@Dashboard')
        })

    });

    it('forgot password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("login").then((data)=>{

            //panggil varible class
            const ln =new login()
            ln.forgot_password()
            ln.reset_password("wawampras@gmail.com")
            ln.btn_reset()
        })

    }); 

    it('username invalid & password valid', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("login").then((data)=>{

            //panggil varible class
            const ln =new login()
            ln.InputUsername("Admin123")
            ln.InputPassword("admin123")
            ln.submit()
        })

    });


    it('username valid & password invalid', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("login").then((data)=>{

            //panggil varible class
            const ln =new login()
            ln.InputUsername("Admin")
            ln.InputPassword("admin")
            ln.submit()
        })

    });

    it('username invalid & password invalid', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("login").then((data)=>{

            //panggil varible class
            const ln =new login()
            ln.InputUsername("Admin123")
            ln.InputPassword("admin")
            ln.submit()
        })

    });

     it('without password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("login").then((data)=>{

            //panggil varible class
            const ln =new login()
            ln.InputUsername("Admin")
            ln.submit()
        })

    });

    it('without username', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("login").then((data)=>{

            //panggil varible class
            const ln =new login()
            ln.InputPassword("admin123")
            ln.submit()
        })

    });

    it('without username & password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("login").then((data)=>{

            //panggil varible class
            const ln =new login()
            ln.submit()
        })

    });
});