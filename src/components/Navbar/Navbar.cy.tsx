
import { Navbar } from './Navbar'

describe('<Navbar /> component', () => {
  it('it should render components in navbar', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navbar />);
    cy.get(".menuText").should('have.text', 'Menu');
    cy.get("[data-cy=menuIcon]").should("be.visible");
    
  });

  it('it should render more of the components in navbar', () => {
    cy.mount(<Navbar />);
    cy.get("[data-cy=searchIcon]").should("be.visible")
    cy.get("[data-cy=logoIcon]").should("be.visible")
    cy.get(".iconContainer").should("be.visible")
  });
  

  
})