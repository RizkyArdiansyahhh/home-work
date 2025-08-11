import { useState } from "react";
import { productsData } from "../data/products";

export const useProducts = () => {
  const [productsByCategories, setProductsByCategories] = useState<
    {
      id: number;
      name: string;
      slug: string;
      price: number;
      category: string;
    }[]
  >(productsData);

  function hanldeProductByCategories(categorie: string) {
    const productsCategories = productsData.filter(
      (product) => product.category === categorie
    );
    setProductsByCategories(productsCategories);
    console.log(productsByCategories);
  }

  return { productsByCategories, hanldeProductByCategories };
};
