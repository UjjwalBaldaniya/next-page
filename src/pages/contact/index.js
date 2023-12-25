import ContactContainer from "@/container/contact.container";
import { tableData } from "@/description/contact.description";
import Loader from "@/shared/Loader";

const Contact = () => {
  const { loading, verifiedData } = ContactContainer();
  const data = verifiedData?.data || [];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableData.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Loader />
          ) : (
            data.map((element, index) => (
              <tr key={index}>
                <td>{element.status}</td>
                <td>{element._id}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
