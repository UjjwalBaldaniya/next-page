import ContactContainer from "@/container/contact.container";
import { tableData } from "@/description/contact.description";
import TableData from "@/shared/TableData";

const Client = () => {
  const { loading, verifiedData } = ContactContainer();
  const data = verifiedData?.data || [];

  return <TableData loading={loading} tableData={tableData} data={data} />;
};

export default Client;
