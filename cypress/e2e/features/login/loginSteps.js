import { Given , When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Demoblaze website" , () => {
    cy.visit('https://www.demoblaze.com/');
});

When("I login with username {string} and password {string}" , (username , password) => {

    cy.get('#login2').click();

    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);

    cy.get("[onclick='logIn()']").click();
});

Then("i should see the welcome message with username {string}" , (username) => {
    cy.get('#nameofuser').should("contain.text" , `Welcome ${username}`);
});

//npm install --save-dev @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor esbuild