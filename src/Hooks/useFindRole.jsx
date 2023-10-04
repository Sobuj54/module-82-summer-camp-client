import useContextApi from "./useContextApi";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFindRole = () => {
  const { user, isAdminLoading } = useContextApi();

  const { data = "", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/users/${user?.email}`);
      return res.data;
    },
    enabled: !isAdminLoading,
  });

  const { role } = data;

  return [role, isLoading];
};

export default useFindRole;
