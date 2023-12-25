const Server = (props) => {
  const data = props?.data || [];

  return (
    <div>
      <h1>Content</h1>
      {data.map((item, index) => (
        <ul key={index}>
          <li>{item.category}</li>
        </ul>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return { props: { data } };
}

export default Server;
