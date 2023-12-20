import useUseRoute from "@/hooks/useUseRoute";

const HomePage = ({ props }) => {
  const { handlePush } = useUseRoute();
  const data = props?.data || [];
  return (
    <div>
      <h1>Content</h1>
      {data.map((item, index) => (
        <ul key={index}>
          <li>{item.category}</li>
          <button onClick={() => handlePush(`/home/${item.id}`)}>Submit</button>
        </ul>
      ))}
    </div>
  );
};

export default HomePage;
