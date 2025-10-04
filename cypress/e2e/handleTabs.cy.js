/// <referance types="Cypress" />
/// <referance types="Cypress-xpath"/>

describe('Handle Chind Tabs', () => {

    it('Open Child Tab', () => {

        cy.visit('https://the-internet.herokuapp.com/windows');

        cy.get('h3').should('have.text', 'Opening a new window');

        cy.get('.example a')
            .invoke('removeAttr', 'target') // Removes the Target = 'Blank'
            .click();                        // Now it opens in a same Tab

    });

});
// Another method 

describe('Handle Child Tab by href', () => {

    it('Should visit Url directly', () => {

        cy.visit('https://the-internet.herokuapp.com/windows');

        // get the href value of the child tab
        cy.get('.example a').then(($el) => {
            const url = $el.prop('href')   // extract the href
            cy.visit(url);
        });

        cy.url().should('includes', 'windows/new');
        cy.get('h3').should('have.text', 'New Window');

    });

});