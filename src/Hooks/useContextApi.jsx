import { useContext } from "react";
import { AuthContext } from "../Context/Context";

const useContextApi = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useContextApi;
