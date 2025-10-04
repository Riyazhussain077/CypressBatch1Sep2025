class ProductPage {
    addToCart() {
        cy.get('.btn-success').contains('Add to cart').should('be.visible').click();
    }

    goHome() {
        cy.get('.navbar-brand').click();
    }
}

export default ProductPage;