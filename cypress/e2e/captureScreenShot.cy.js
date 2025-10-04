describe('Test', () => {

    it('take screenShot', () => {

        cy.visit("https://www.amazon.in/");
        cy.screenshot("HomePage", { capture: 'viewport' } );
        // cy.wait(5000);
        // cy.get('a.navbar-brand').screenshot("logo");

        // cy.xpath('//a[text()="Mobiles"]').click();
        // cy.wait(3000)
        // cy.screenshot();


    });
});