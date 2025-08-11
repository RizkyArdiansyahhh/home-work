import { Link } from "react-router";

type CardProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  slug: string;
};
const CardProduct = (props: CardProductType) => {
  const { id, name, price, category, slug } = props;
  return (
    <div
      key={id}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "200px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <h3 style={{ marginBottom: "8px" }}>{name}</h3>
      <p style={{ fontWeight: "bold", color: "#333" }}>Rp. {price} </p>
      <p style={{ fontSize: "14px", color: "#666" }}>{category}</p>
      <Link to={`${slug}${id}`}>Detail</Link>
    </div>
  );
};
export default CardProduct;
