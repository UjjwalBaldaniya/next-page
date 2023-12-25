const Static = (props) => {
  const data = props?.data || [];
  return (
    <div>
      <h3>This is SSG</h3>
      {data.map((element, index) => (
        <div key={index}>
          <p>{element.id}</p>
          <p>{element.category}</p>
          <p>{element.description}</p>
          <p>{element.title}</p>
          <p>{element.price}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return { props: { data } };
}

export default Static;
