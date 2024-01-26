describe('Hackathon Suite', () => {
    beforeEach(() => {
        // Start Applitools Visual AI Test
        //TODO change appName to your App Name!
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: Cypress.currentTest.title,
        })
    })
    // The example test from Applitools. Feel free to use it.skip once you're developing your own tests. 
    it('Cypress: Quickstart', () => {
        cy.visit('https://sandbox.applitools.com/bank?layoutAlgo=true');

        // Full Page - Visual AI Assertion
        cy.eyesCheckWindow({
            tag: "Login page"
        });

        cy.get('#username').type('user')
        cy.get('#password').type('password')
        cy.get('#log-in').click()
        cy.get('.dashboardNav_navContainer__kA4wD').should('be.visible');

        cy.eyesCheckWindow({
            tag: "Main page",
            //Uncomment to apply coded Layout regions and have test pass
            // layout: [
            //     {selector: '.dashboardOverview_accountBalances__3TUPB'},
            //     {selector: '.dashboardTable_dbTable___R5Du'}
            // ]
        });
    })

    //TODO create your test case here! Rename the test name according to your user journey
    it('[your user journey #1]', () => {
       
    })

    it('[your user journey #2]', () => {
       
    })

    afterEach(() => {
        // End Applitools Visual AI Test
        cy.eyesClose()
    })
})