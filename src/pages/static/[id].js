const StaticUser = ({ data }) => {
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.category}</p>
      <p>{data.description}</p>
      <p>{data.title}</p>
      <p>{data.price}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  const allUserId = data.map((userId) => userId.id);
  return {
    paths: allUserId.map((userId) => ({ params: { id: `${userId}` } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  return { props: { data } };
}

export default StaticUser;
