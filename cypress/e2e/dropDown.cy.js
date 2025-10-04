/// <referance types="Cypress" />
/// <referance types="Cypress-xpath"/>

describe('DropDown', () => {

    it.skip('Select Options from Dropdown', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Select by visible text
        cy.get('select').select('Option1').should('have.value', 'option1');

        // Select by value
        cy.get('select').select('option2').should('have.value', 'option2');

        // Select by index
        cy.get('select').select(3).should('have.value', 'option3');
    });

    it.skip('From Dropdown', () => {
        cy.visit('https://demoblaze.com/');

        cy.contains('Laptops').click();

        cy.get('#tbodyid').should('contain.text', 'MacBook Pro');
    });

    it.skip('Auto Suggest Dropdown', () => {

        cy.visit('https://www.google.com/');

        cy.get('textarea[name="q"]').type('cypress testing');

        cy.get('#jZ2SBf div span').contains('cypress testing').click();

        cy.url().should('include', 'cypress')

    });

    it('Auto Suggestion', () => {
        cy.visit('https://www.google.com/');

        cy.get('[id="APjFqb"]').type('Cars', { delay: 100 });

        cy.get('ul[role="listbox"] li div span').each(($el) => {

            const suggestion = $el.text();
            

            cy.log('Suggestion:' + suggestion);

            if (suggestion.includes('CARS24')) {
                cy.wrap($el).click();
            }
        });
        cy.url().should('includes', 'CARS24')
    })
});