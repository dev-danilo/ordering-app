import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({ id }) => newProduct.id === id);

  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...products, { ...newProduct, quantity: 1 }];
}

export function remove(
  products: ProductCartProps[],
  removeProduct: ProductProps
) {
  const existingProduct = products.find(({ id }) => removeProduct.id === id);

  if (existingProduct) {
    existingProduct.quantity > 1
      ? existingProduct.quantity - 1
      : products.filter((product) => product !== existingProduct);
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
  }

  return { ...products };
}
