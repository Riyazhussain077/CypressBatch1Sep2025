/// <referance types="Cypress" />
/// <referance types="Cypress-xpath"/>

describe('Handel iFrames', () => {

    it('Frames', () => {

        cy.visit('https://ui.vision/demo/webtest/frames/');

        cy.get('[src="frame_3.html"]')
            .its('0.contentDocument.body')            // Navigates into the iframe's body
            .should('be.visible')                     // wait until it's visible
            // .then(cy.warp)                            // covert into cypress chainable
            .find('[name="mytext3"]')                 // Locates element inside the iframe
            .type('Hello, My name is Yuvaraj');       // filling the value

        // Assertion inside the iframe

        cy.get('[src="frame_3.html"]')
            .its('0.contentDocument.body')
            .find('[name="mytext3"]')
            .should('have.value', 'Hello, My name is Yuvaraj')

    });
});

describe('Handel Frames', () => {
    it('Nested Frames', () => {
        cy.visit('https://ui.vision/demo/webtest/frames/');
        cy.get('frame[src="frame_1.html"]').then(($frame) => {
            const src = $frame.prop('src');                // Get Source URL
            cy.visit(src);                                 // visit it directly in same tab
            // Now interact with its content
            // cy.get('frame').should('be.visible');               // Basic assertion inside the frame..
        });

    });
});