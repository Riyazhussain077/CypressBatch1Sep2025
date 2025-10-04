describe('Test 2', () => {

    it('Navigation', () => {

        cy.visit('https://www.demoblaze.com/');
        cy.title().should('eq', 'STORE');

        cy.get('#cartur').click();
        cy.get('.col-lg-1 h2').should('have.text', "Total");

        cy.go('back');
        cy.title().should('eq', 'STORE');

        cy.go('forward');
        cy.get('.col-lg-1 h2').should('have.text', "Total");

        cy.go(-1);
        cy.title().should('eq', 'STORE');

        cy.go(1);
        cy.get('.col-lg-1 h2').should('have.text', "Total");
        cy.wait(3000);
        cy.reload();
        cy.wait(3000);

    });




});