class HomePage {
    Visit() {
        cy.visit('https://www.demoblaze.com/');
    }

    clickLogin() {
        cy.get('#login2').click();
    }

    clickSingUp() {
        cy.get('#signin2').click();
    }

    selectProduct(productName) {
        cy.get('.card-title a').contains(productName).scrollIntoView().should('be.visible').click();
    }

    gotoCart() {
        cy.get('#cartur').click();
    }
}

export default HomePage;