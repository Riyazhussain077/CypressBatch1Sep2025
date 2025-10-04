class LoginPage {

    openLoginModal() {
        cy.get('#login2').click();
    }

    login(username, password) {
        cy.get('#loginusername').type(username);
        cy.get('#loginpassword').type(password);
        cy.get('[onclick="logIn()"]').click();
    }

    verifyLogin(username) {
        cy.get('#nameofuser').should('contain.text' , `Welcome ${username}`);
    }
}
export default LoginPage;