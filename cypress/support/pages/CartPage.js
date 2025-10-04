class CartPage {

    placeOrder() {
        cy.contains('button' , 'Place Order').click();
    }

    fillOrderForm({name , country, city, creditCard, month, year}) {
        cy.get('#name').type(name);
        cy.get('#country').type(country);
        cy.get('#city').type(city);
        cy.get('#card').type(creditCard);
        cy.get('#month').type(month);
        cy.get('#year').type(year);
    }

    purchase() {
        cy.contains('button' , 'Purchase').click();
    }

    getPurchaseConfirmation() {
        return cy.get('.sweet-alert').invoke('text');
    }
}

export default CartPage;