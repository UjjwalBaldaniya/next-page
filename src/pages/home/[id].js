const Products = ({ product }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const productId = params.id;
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const product = await response.json();

  return {
    props: { product },
  };
};

export default Products;
