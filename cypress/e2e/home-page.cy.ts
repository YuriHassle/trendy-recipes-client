describe('template spec', () => {
  it('contains the hero banner', () => {
    cy.visit('http://localhost:3000');
    cy.contains('h1', 'Trendy Recipes');
  });
});
