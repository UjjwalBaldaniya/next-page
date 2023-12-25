import { api } from "@/utils/api";
import { EXAM_DATA, GET } from "@/utils/apiPath";
import { useEffect, useState } from "react";

const ContactContainer = () => {
  const [verifiedData, setVerifiedData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVerifiedData();
  }, []);

  const getVerifiedData = async () => {
    setLoading(true);
    const res = await api(GET, EXAM_DATA, true, {});

    if (res.status) {
      setLoading(false);
      setVerifiedData(res);
    }
  };

  return {
    loading,
    verifiedData,
  };
};
export default ContactContainer;
