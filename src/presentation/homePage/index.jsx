import useUseRoute from "@/hooks/useUseRoute";
import Button from "@/shared/Button";

const HomePage = ({ props }) => {
  const { handlePush } = useUseRoute();
  const data = props?.data || [];

  return (
    <div>
      <h1>Content</h1>
      <Button onClick={() => handlePush("/signin")}>Signin</Button>
      {data.map((item, index) => (
        <ul key={index}>
          <li>{item.category}</li>
          <Button onClick={() => handlePush(`/home/${item.id}`)}>Submit</Button>
        </ul>
      ))}
    </div>
  );
};

export default HomePage;
