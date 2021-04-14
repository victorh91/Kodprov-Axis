describe("Login succes", function () {
  it("Successfull login", function () {
    cy.visit("http://localhost:3001/login");

    cy.get(":nth-child(1) > .form-control").type("demouser1");

    cy.get(":nth-child(2) > .form-control").type(
      "0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e"
    );

    cy.get("#submitClick").click();
    cy.get("#homeContainer1").should("be.visible");
  });
});

describe("Login failed", () => {
  it("Check if the user typed in the right credentials", () => {
    cy.visit("http://localhost:3001/login");
    cy.get(":nth-child(1) > .form-control").type("dem");

    cy.get(":nth-child(2) > .form-control").type(
      "0b14d5032937b851835442f69d5c94e"
    );
    cy.get("#submitClick").click();
    cy.get("#alertBox").should("be.visible");
  });
});
