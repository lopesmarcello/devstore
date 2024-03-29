import type { NextRequest } from "next/server";
import { z } from "zod";
import data from "../data.json";

export async function GET(request: NextRequest) {
  //Simula demora de response do backend
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { searchParams } = request.nextUrl;
  const query = z.string().parse(searchParams.get("q"));

  const products = data.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  return Response.json(products);
}
