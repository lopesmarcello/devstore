"use client";

import { useCart } from "@/contexts/cart-context";

export function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(productId);
  }

  return (
    <button
      type="button"
      className="mt-8 w-full flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  );
}
