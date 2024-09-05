import { useContext } from "react";
import { IpInfoContext } from "../context/IpContext";
import { fetchIpData } from "../api";

export const useIpSearch = () => {
  const { setIpInfo } = useContext(IpInfoContext);

  const onSearch = async (ipAddress: string) => {
    const response = await fetchIpData(ipAddress);
    // TODO: Manage error response
    if (!response.ok) return console.log("fallo en la peticion");

    const { ipData } = response;
    setIpInfo(ipData!);
  };

  return {
    onSearch,
  };
};
