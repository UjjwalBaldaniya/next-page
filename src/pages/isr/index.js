const Isr = ({ data }) => {
  return (
    <div>
      {data.map((element, index) => (
        <div key={index}>
          <p>{element.id}</p>
          <p>{element.name}</p>
          <p>{element.location}</p>
          <p>{element.designation}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/employees`);
  const data = await res.json();
  return { props: { data }, revalidate: 10 };
}

export default Isr;
