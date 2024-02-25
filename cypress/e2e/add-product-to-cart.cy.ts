describe("add product to cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to navigate to the product page and add it to the cart", () => {
    // O primerio <a> que ele encontrar em que o HREF comece com (ˆ) '/product'
    cy.get('a[href^="/product"]').first().click();

    // Garantir que a url inclui '/product'
    cy.url().should("include", "/product");

    // Procura e clica no botão de adicionar ao carrinho
    cy.contains("Adicionar ao carrinho").click();

    // Garante que o número do carrinho foi atualizado
    cy.contains("Cart (1)").should("exist");
  });

  it("should count duplicated products on cart", () => {
    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");

    // Procura e clica DUAS VEZES no botão de adicionar ao carrinho
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Adicionar ao carrinho").click();

    // Garante que o número do carrinho foi atualizado corretamente
    cy.contains("Cart (2)").should("exist");
  });

  it("should be able to search for a product and add it to the cart", () => {
    // Procura o input de name=q, digita 'moletom' e dá submit (enter)
    cy.searchByQuery("moletom");

    // O primerio <a> que ele encontrar em que o HREF comece com (ˆ) '/product'
    cy.get('a[href^="/product"]').first().click();

    // Garantir que a url inclui '/product'
    cy.url().should("include", "/product");

    // Procura e clica no botão de adicionar ao carrinho
    cy.contains("Adicionar ao carrinho").click();

    // Garante que o número do carrinho foi atualizado
    cy.contains("Cart (1)").should("exist");
  });
});
