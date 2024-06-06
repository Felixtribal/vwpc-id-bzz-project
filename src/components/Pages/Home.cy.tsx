import { HomePage } from "./HomePage";
import yellowPlate from "./../../assets/images/yellow-container.jpg"

describe("Testing the Homepage Component", () => {
  it("it should display the scrolling text and the image mock", () => {
    cy.mount(<HomePage />);
    cy.get(".homeBg").should("be.visible");
    cy.get(".actualText").should("have.text" , "IDBUZZ");
  });

  it("it should display the yellow plate" , () => {
    cy.mount(<HomePage />);
    cy.get(".yellowPlate").should("have.attr","src" ,yellowPlate );
  });

  it("it shoud display all the animated images available" , () => {
    cy.mount(<HomePage />);
    cy.get(".eachImage").should("be.visible")
  })
});
