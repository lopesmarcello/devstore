import data from "../data.json";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simular delay de resposta do backend

  const featuredProducts = data.products.filter((product) => product.featured);
  return Response.json(featuredProducts);
}
