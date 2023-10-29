import { useCallback, useState } from "react";
import DataAccess from "../DataAccess/DataAccess";

const useHttpClient = () => {
  const [isWaitingRsp, setIsWaitingRsp] = useState(false);
  const [error, setError] = useState("");

  const sendRequestMsg = useCallback(async (request) => {
    setError("");
    setIsWaitingRsp(true);
    const { error, result } = await DataAccess(request);
    if (error) {
      // alert error mnull
      setError(error);
      setIsWaitingRsp(false);
      return null;
    }

    setError("");
    setIsWaitingRsp(false);
    return result;
  }, []);

  return { isWaitingRsp, error, sendRequestMsg };
};

export default useHttpClient;
