import { formatColumnName } from "@/utils/javascript";
import Loader from "./Loader";

const styles = {
  container: {
    margin: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    background: "#f2f2f2",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
  },
  loader: {
    textAlign: "center",
    padding: "20px",
  },
};

const TableData = ({ loading, tableData, data }) => {
  return (
    <div style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              {tableData.map((columnName, index) => (
                <th key={index} style={styles.th}>
                  {formatColumnName(columnName)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                {tableData.map((columnName, columnIndex) => (
                  <td key={columnIndex} style={styles.td}>
                    {rowData[columnName]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableData;
