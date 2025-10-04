describe('Validate the application', () => {

    it('login functionality', () => {

        // visit site
        cy.visit('https://demoblaze.com/');

        // click on login button using CSS
        cy.get('#login2').click();
        cy.wait(1000);   // Pause command

        // type username with CSS
        cy.get('[id="loginusername"]').type('pavanol');

        // Type password with Xpath
        cy.xpath('//input[@id="loginpassword"]').type('test@123');

        // click on login button using text function (xpath)
        cy.xpath("//button[text()='Log in']").click();

        // Assertion -> logout is visible and contain text..
        cy.xpath("//a[text()='Log out']").should('be.visible').and('contain.text', 'Log out');

        // pause command
        cy.wait(3000);


    });


});