describe('Assertions', () => {

    it('Implicit Assertions', () => {

        cy.visit('https://demoblaze.com/');

        // should  and

        cy.url().should('include', 'demoblaze.com');
        cy.url().should('eq', 'https://demoblaze.com/');
        cy.url().should('contain' , 'moblaze');

        cy.url().should('include', 'demoblaze.com')
            .should('eq', 'https://demoblaze.com/')
            .should('contain', 'moblaze');

              cy.url().should('include', 'demoblaze.com')
            .and('eq', 'https://demoblaze.com/')
            .and('contain', 'moblaze')
            .and('not.contain' , 'runblaze');

            cy.title().should('include' , 'STORE')
            .and('eq' , 'STORE')
            .and('contain' , 'ORE');

            cy.get('#nava > img').should('be.visible')
            .and('exist');

            cy.xpath('//a').should('have.length' , '33');

            cy.xpath('//a[@id="login2"]').click();
            cy.wait(2000);

            cy.get('#loginusername').type('pavanol');
            cy.get('#loginusername').should('have.value' , 'pavanol');
            cy.get("[id='loginpassword']").type('test@123');
            cy.get("[id='loginpassword']").should('have.value' , 'test@123');


    });


    it('Explicit Assertions' , () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').type('Admin');
        cy.xpath('//input[@placeholder="Password"]').type('admin123');
        cy.get('[type="submit"]').click();

        let outcome = "manda user";

        cy.get('p[class="oxd-userdropdown-name"]').then( (x) => {

            let actualName = x.text();

            // BDD 
            expect(actualName).to.equal(outcome);
            expect(actualName).to.not.equal(outcome);

            // TDD

            assert.equal(actualName, outcome);
            assert.notEqual(actualName,outcome);
        })

       });



});