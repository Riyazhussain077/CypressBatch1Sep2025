describe('Data Driven Testing', () => {

    let testData;

    before(() => {
        cy.fixture('users').then((data) => {
            testData = data;    // Load the JSON data..
        });
    });

    it('Login Test', () => {
        testData.forEach((user) => {
            cy.visit('https://the-internet.herokuapp.com/login');

            cy.get('#username').type(user.username);
            cy.get('#password').type(user.password);
            cy.get('[type="submit"]').click();
            cy.wait(2000);
        });
    });
});