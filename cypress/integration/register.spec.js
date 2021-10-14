/// <reference types="cypress" />

describe('Register', () => {
  it('should register when fill in the form with the data and submit it', () => {
    cy.visit('https://form-agilizei.netlify.app')

    cy.get('input[name=firstName]').type('Agilizei');
    cy.get('input[name=lastName]').type('Bootcamp');
    cy.get('textarea[name=adress]').type('Rua dos bobos, 0');
    cy.get('input[name=emailAdress]').type('test@mail.com');
    
    cy.get('input[value=n]').check();
    cy.get('input[type=checkbox]').check('Netflix');
    cy.get('input[type=checkbox]').check('Dormir');

    cy.get('select#countries').select('Dinamarca', { force: true });
    cy.get('select#years').select('2006', { force: true });
    cy.get('select#months').select('Janeiro', { force: true });
    cy.get('select#days').select('8', { force: true });

    cy.get('input#firstpassword').type('Alunos@2021');
    cy.get('input#secondpassword').type('Alunos@2021');

    cy.contains('Finalizar cadastro').click();
  });
});