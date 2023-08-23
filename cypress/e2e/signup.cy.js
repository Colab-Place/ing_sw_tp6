describe('Sign up tests', () => {
  it('FAIL: Valid imput but existent email', () => {
    cy.visit('/addUser');

    cy.get('input[id="firstName"]').type('Peter');
    cy.get('input[id="lastName"]').type('Parker');
    cy.get('input[id="email"]').type('test@gmail.com');
    cy.get('input[type="password"]').type('whatever');
    cy.get('button[type="submit"]').click();

    cy.get('[id="error"]')
      .should('be.visible')
      .should('contain.text', 'Email address is already in use');

    cy.location('pathname').should('eq', '/addUser');
  });


  it('FAIL: Uncomplete form', () => {
    cy.visit('/addUser');

    cy.get('input[id="email"]').type('test@gmail.com');
    cy.get('input[type="password"]').type('whatever');
    cy.get('button[type="submit"]').click();

    cy.get('[id="error"]')
      .should('be.visible')
      // Debe aparecer un mensaje que nos avise de que
      // no se completaron los campos de firstName y lastName
      .should('contain.text', 'firstName')
      .should('contain.text', 'lastName');

    cy.location('pathname').should('eq', '/addUser');
  });


  it('FAIL: Invalid email', () => {
    cy.visit('/addUser');

    cy.get('input[id="firstName"]').type('Peter');
    cy.get('input[id="lastName"]').type('Parker');
    cy.get('input[id="email"]').type('testgmail.com');
    cy.get('input[type="password"]').type('whatever');
    cy.get('button[type="submit"]').click();

    cy.get('[id="error"]')
      .should('be.visible')
      .should('contain.text', 'Email is invalid');

    cy.location('pathname').should('eq', '/addUser');
  });


  it('FAIL: Short password', () => {
    cy.visit('/addUser');

    cy.get('input[id="firstName"]').type('Peter');
    cy.get('input[id="lastName"]').type('Parker');
    cy.get('input[id="email"]').type('test@gmail.com');
    cy.get('input[type="password"]').type('w');
    cy.get('button[type="submit"]').click();

    cy.get('[id="error"]').should('be.visible');

    cy.location('pathname').should('eq', '/addUser');
  });

  it('SUCCESS: Cancel button returns to homepage', () => {
    cy.visit('/addUser');

    cy.get('button[id="cancel"]')
      .should('be.visible')
      .click();

    cy.location('pathname').should('eq', '/login')
  });
})