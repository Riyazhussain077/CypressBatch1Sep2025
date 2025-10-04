describe('Checking Items', () => {

    it('Radio Buttons', () => {

        cy.visit('https://testautomationpractice.blogspot.com/');

        // Visibility of radio Button

        cy.get('#female').should('be.visible');
        cy.get('#male').should('be.visible');

        // Checking the Radio Button

        // cy.get('#female').check().should('be.checked');
        // cy.get('#male').should('not.be.checked');

        cy.get('#male').check().should('be.checked');
        cy.get('#female').should('not.be.checked');

    });

    it('CheckBox', () => {

        cy.visit('https://testautomationpractice.blogspot.com/');

        // Visibility of the element

        cy.get('[value="sunday"]').should('be.visible');

        // Checking the CheckBox

        cy.get('#tuesday').check().should('be.checked');

        // Unchecking 

        cy.get('#tuesday').uncheck().should('not.be.checked');

        // Selecting Multiple CheckBox

        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked');
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked');

        // Selecting few checkboxes

        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked');
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked');
        cy.get('input.form-check-input[type="checkbox"]').last().uncheck().should('not.be.checked');

    });


});
