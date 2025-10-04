
// describe('Mouse Hover', () => {

//     it('Hover', () => {
//         cy.visit('https://demoqa.com/tool-tips');

//         // Trigger mouseover (hover) on the button

//         cy.get('#toolTipButton').trigger('mouseover');

//         // Assertion - tooltip should be visible

//        // cy.get('#toolTipButton').should('contain', 'You hovered over the Button');
//     });
// });


// describe('Right Click' , () => {

//     it('Handle Right Click' , () => {

//         cy.visit('https://demoqa.com/buttons');

//         // Right Click on Button
//         cy.get('#rightClickBtn').rightclick();

//         // Assertion

//         cy.get('#rightClickMessage').should('have.text' , 'You have done a right click');

//     });
// });

// describe('Double Click' , () => {

//     it('Handle Double Click' , () => {

//         cy.visit('https://demoqa.com/buttons');

//         // Right Click on Button
//         cy.get('#doubleClickBtn').dblclick();

//         // Assertion

//         cy.get('#doubleClickMessage').should('have.text' , 'You have done a double click');

//     });
// });


// describe('Scroll page', () => {

//     it('Scroll to element', () => {

//         cy.visit('https://demoqa.com/automation-practice-form');

//         // Scroll to Element

//         cy.get('#submit').scrollIntoView().should('be.visible');

//         // Scroll by pixel

//         cy.scrollTo(0, 500);   // Scroll 500px down
//         cy.wait(2000);
//         cy.scrollTo('top')    // scroll back to top

//     });
// });


describe('Drag And Drop', () => {
    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/');
    });


    it('Should Drag and Drop', () => {

        const dataTransfer = new DataTransfer();

        // Start Dragging
        cy.get('#draggable').trigger('dragstart', { dataTransfer });

        // Drop on target
        cy.get('#droppable').trigger('drop', { dataTransfer });

        // Finish Drag
        cy.get('#droppable').trigger('dragend');

        // Assertion
        cy.get('#droppable > p').should('have.text', 'Drop here');

        cy.wait(3000);

    })



})


