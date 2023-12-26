const IsrUser = ({ data }) => {
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.location}</p>
      <p>{data.designation}</p>
      <hr></hr>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:4000/employees/${params.id}`);
  const data = await res.json();
  return { props: { data }, revalidate: 30 };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/employees`);
  const data = await res.json();
  const paths = data.map((user) => ({
    params: { id: `${user.id}` },
  }));
  return { paths, fallback: "blocking" };
}

export default IsrUser;
