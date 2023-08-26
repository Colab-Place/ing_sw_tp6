describe('Logout tests', () => {
    beforeEach(() => {
        // Login user
        cy.request({
            method: 'POST',
            url: '/users/login',
            body: {
                email: Cypress.env('testemail'),
                password: Cypress.env('testpass')
            },
            foward: true
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.body.token).to.not.be.undefined;
        });

        cy.getCookie('token').should('exist');
    });

    it('SUCCESS: Table doesnt display' , () => {
        // Logout
        cy.visit('/contactList');
        cy.get('button[id="logout"]').click();
        
        // Assertions
        cy.visit('/contactList');
        cy.get('table').should('not.exist');
    });

    it('SUCCESS: Redirects to root page', () => {
        // Logout
        cy.visit('/contactList');
        cy.get('button[id="logout"]').click();

        // Assertions
        cy.location('pathname').should('eq', '/');
    });
})