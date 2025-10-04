describe('API Test', () => {

    // GET Request  - Fetch All Posts..

    it('GET - Fetch all post', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.length(100);
                expect(response.body[0]).to.have.property('id');
            });
    });

    // GET Request  - Fetch Single Posts..

    it('GET , - fetch single posts by id', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.id).to.eq(1);
                expect(response.body).to.have.property('title');
            });
    });

    // POST Request   -> Create new post

    it('POST - Creating a new post', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'My Last Post',
            body: "Learning API Test with Cypress",
            userId: 171,     // userId we can give any value.. 
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body.title).to.eq('My Last Post');
        });
    });
    // PUT    -> Update the entire Data

    it('PUT - Updating the entire data', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'My Last Second Post',
            body: "It was updated recently",
            userId: 171,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('My Last Second Post');
            expect(response.body.body).to.eq('It was updated recently');
        });
    });

    // DELETE     -> Delete the data

    it('DELETE  - Delete the new post created', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    });
});

describe('API Stubbing' , () => {
    it('Stub' , () => {

        // Stub response
        cy.intercept('GET' , 'https://jsonplaceholder.typicode.com/posts', {
            statusCode : 200,
            body: [
                {id : 1, title : "Mocked Post1" , body: "This is Stubbed Method"},
                {id : 2, title: "Mocked post2" , body : "Another stubbing Method"}
            ],
        }).as('getPosts');

        cy.request('https://jsonplaceholder.typicode.com/posts/1');

        cy.wait('@getPosts');

        cy.get('@getPosts').its('response.statusCode').should('eq' , 200);
    })

});