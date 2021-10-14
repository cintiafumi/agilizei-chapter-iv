/// <reference types="cypress" />

describe('List', () => {
  it('should show an empty list when there is no register', () => {

    cy.fixture('empty-list').then((data) => {
      window.localStorage.setItem('data', JSON.stringify(data));
    })
    
    cy.visit('https://form-agilizei.netlify.app/listagem.html');
  });

  it('should list all records when there are registers', () => {
    cy.fixture('list-with-items').then((data) => {
      window.localStorage.setItem('data', JSON.stringify(data));
    })

    cy.visit('https://form-agilizei.netlify.app/listagem.html');
  });
});
