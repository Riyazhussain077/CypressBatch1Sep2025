describe('My First Test Run' , () => {

it('Launch' , () => {

    cy.visit('https://demoblaze.com/');
    cy.title().should('eq' , 'STORE');

});

it('Launch - Negative' , () => {

    cy.visit('https://demoblaze.com/');
    cy.title().should('eq' , 'STORE');

});

it('amazon' , function () {

    cy.visit('https://www.amazon.in/');
    cy.title().should('eq' , 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
})

});

// npx cypress run testRun.cy.js (basic test run command in terminal)
// npx cypress run testRun.cy.js --browser chrome (to run in particular browser)
// npx cypress run testRun.cy.js --browser chrome --headed (to execute in headed)

