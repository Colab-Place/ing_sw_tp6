describe('Log in tests', () => {
    it('FAIL:  Incorrect username and password', () => {
        cy.visit('');

        cy.get('input[id="email"]').type('ranpanpapa123@random.com');
        cy.get('input[type="password"]').type('InvalidPassword123456789');
        cy.get('button[id="submit"]').click();

        cy.get('[id="error"]')
            .should('be.visible')
            .should('contain.text', 'Incorrect username or password');
    });

    it('FAIL:  Correct username and incorrect password', () => {
        cy.visit('');

        cy.get('input[id="email"]').type('diegoamalia123@yahoo.com');
        cy.get('input[type="password"]').type('InvalidPassword123456789');
        cy.get('button[id="submit"]').click();

        cy.get('[id="error"]')
            .should('be.visible')
            .should('contain.text', 'Incorrect username or password');
    });


    it('SUCCESS: Correct username and password', () => {
        cy.visit('');

        cy.get('input[id="email"]').type('diegoamalia123@yahoo.com');
        cy.get('input[type="password"]').type('DiegoAmalia');
        cy.get('button[id="submit"]').click();

        cy.get('button[id="add-contact"]').should('be.visible');

        cy.location('pathname').should('eq', '/contactList')
    });
})