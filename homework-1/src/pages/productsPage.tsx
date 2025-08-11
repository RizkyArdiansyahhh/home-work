import { useSearchParams } from "react-router";
import CardProduct from "../components/cardProduct";
import { productsData } from "../data/products";
import { useProducts } from "../hooks/useProducts";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productsByCategories, hanldeProductByCategories } = useProducts();

  function handleSetSearchParams(searchParamsCategorie) {
    setSearchParams({ categorie: searchParamsCategorie });
    hanldeProductByCategories(searchParams.get("categorie") || "");
  }

  return (
    <>
      <h1>Products Page</h1>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginLeft: "1rem",
        }}
      >
        <button onClick={() => handleSetSearchParams("Fashion")}>
          Fashion
        </button>
        <button onClick={() => handleSetSearchParams("Aksesoris")}>
          Aksesoris
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {productsByCategories.map((product) => {
          return (
            <CardProduct
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              slug={product.slug}
            />
          );
        })}
      </div>
    </>
  );
};
export default ProductsPage;
