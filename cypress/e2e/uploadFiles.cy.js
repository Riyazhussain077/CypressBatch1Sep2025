describe('Single File Upload', () => {

    it('should upload single file', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        // Upload file from fixtures
        cy.get('#filesToUpload').attachFile({ filePath: 'sample.txt', allowEmpty: true });

        // Assertion

        cy.get('#fileList li').should('contain.text', 'sample.txt');

        cy.wait(3000);

    });
});


describe('Multiple File Upload', () => {

    it('should upload Multiple file', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        // Upload file from fixtures
        cy.get('#filesToUpload').attachFile(['sample.txt' , 'testdata.json']);

        // Assertion

        cy.get('#fileList li')
        .should('contain.text', 'sample.txt')
        .and('contain.text' , 'testdata.json');

        cy.wait(3000);

    });
});