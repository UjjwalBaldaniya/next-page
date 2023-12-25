import ContactContainer from "@/container/contact.container";
import { tableData } from "@/description/contact.description";
import TableData from "@/shared/TableData";

const Contact = () => {
  const { loading, verifiedData } = ContactContainer();
  const data = verifiedData?.data || [];

  return <TableData loading={loading} tableData={tableData} data={data} />;
};

export default Contact;
