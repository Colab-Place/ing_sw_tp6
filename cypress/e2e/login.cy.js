describe('Login tests', () => {
    it('FAIL:  Incorrect username and password', () => {
        // Login 
        cy.visit('/');
        cy.get('input[id="email"]').type('invaliduser@random.com');
        cy.get('input[type="password"]').type('InvalidPassword123456789');
        cy.get('button[id="submit"]').click();

        // Assertions
        cy.get('[id="error"]')
            .should('be.visible')
            .should('contain.text', 'Incorrect username or password');
    });


    it('FAIL:  Correct username and incorrect password', () => {
        // Login 
        cy.visit('/');
        cy.get('input[id="email"]').type(Cypress.env('testemail'));
        cy.get('input[type="password"]').type('InvalidPassword123456789');
        cy.get('button[id="submit"]').click();

        // Assertions
        cy.get('[id="error"]')
            .should('be.visible')
            .should('contain.text', 'Incorrect username or password');
    });


    it('SUCCESS: Redirects to contact list webpage and shows contacts table', () => {
        // Login 
        cy.visit('/');
        cy.get('input[id="email"]').type(Cypress.env('testemail'));
        cy.get('input[type="password"]').type(Cypress.env('testpass'));
        cy.get('button[id="submit"]').click();

        // Assertions
        cy.location('pathname').should('eq', '/contactList');
        cy.get('table').should('exist');
    });
})