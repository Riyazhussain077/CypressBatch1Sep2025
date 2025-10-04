// / <referance types="Cypress" />
// / <referance types="Cypress-xpath"/>


describe('Handle Alerts', () => {

    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    });

    it('Handle Simple Alert', () => {

        cy.get('#alertBtn').click();

        // Simple Alert
        cy.on('window:alert', (message) => {
            expect(message).to.equal('I am an alert box!'); // Assertions on the alert text
            expect(message).to.not.equal('I am an');
        });

    });

    it('Handle Confirm Alert', () => {

        cy.xpath('//button[@id="confirmBtn"]').click();

        // Handle Confirm Alert

        cy.on('window:confirm', (message) => {
            expect(message).to.equal('Press a button!');
            expect(message).to.not.equal('Pre');
            return true; // Clicking By using ok button..
        });
        cy.xpath('//p[@id="demo"]').should('have.text', 'You pressed OK!');
    });

    it('Handle Confirm Alert - Cancel', () => {
        cy.get('#confirmBtn').click();

        // Handle Window Confirm

        cy.on('window:confirm', (message) => {
            expect(message).to.equal('Press a button!');
            expect(message).to.not.equal('Prs a on!');
            return false; // Clicking by using Cancel button
        });
        cy.xpath('//p[@id="demo"]').should('have.text', 'You pressed Cancel!');
    });

    it('Handle Prompt Alert', () => {

        cy.window().then((abc) => {
            // stub the window prompt to return the text
            cy.stub(abc, 'prompt').returns('Yuvaraj')
        });
        cy.get('[id="promptBtn"]').click();

        cy.get('#demo').should('have.text', 'Hello Yuvaraj! How are you today?')
    });















});