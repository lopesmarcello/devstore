describe("search products", () => {
  it("should be able to search for products", () => {
    cy.searchByQuery("moletom");

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=moletom");

    // Testa se existe um produto com o filtro realizado
    cy.get('a[href^="/product"]').should("exist");
  });

  it("should not be able to visit search page without a search query", () => {
    // Ignora a Exception não tratada do redirect do Next (NEXT_REDIRECT)
    cy.on("uncaught:exception", () => false);

    // Visita a pagina de busca sem uma query
    cy.visit("/search");

    // Garante que foi redirecionado para a Home
    cy.location("pathname").should("equal", "/");
  });
});
