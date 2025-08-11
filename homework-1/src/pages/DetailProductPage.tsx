import { useParams } from "react-router";

const DetailProductPage = () => {
  const params = useParams();
  return <h1>{params.slug}</h1>;
};

export default DetailProductPage;
