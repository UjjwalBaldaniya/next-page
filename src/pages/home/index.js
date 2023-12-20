import HomePage from "@/presentation/homePage";

const Home = (props) => { 
  return <HomePage props={props} />;
};

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return { props: { data } };
}

export default Home;
