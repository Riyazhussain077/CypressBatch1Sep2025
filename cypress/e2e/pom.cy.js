import CartPage from "../support/pages/CartPage";
import HomePage from "../support/pages/HomePage"
import LoginPage from "../support/pages/LoginPage";
import ProductPage from "../support/pages/ProductPage";

describe('DemoBlaze Application Check' , () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const loginPage = new LoginPage();

    it('should verify the e2e flow' , () => {
        homePage.Visit();

        loginPage.openLoginModal();
        cy.wait(2000);
        loginPage.login('pavanol' , 'test@123');
        loginPage.verifyLogin('pavanol');

        homePage.selectProduct('Sony xperia z5');

        productPage.addToCart();

        cy.on('window:alert' , (text) => {
            expect(text).to.contains('Product added.');
        });

        productPage.goHome();
        homePage.gotoCart();

        cartPage.placeOrder();
        cartPage.fillOrderForm({
            name : 'Yuvaraj',
            country : 'India',
            city : 'Chennai',
            creditCard : 'DSAFASIUFAFHS',
            month : "10",
            year : 2025
        });

        cartPage.purchase();

        cartPage.getPurchaseConfirmation().should('contain' , 'Thank you for your purchase!');
    });
});