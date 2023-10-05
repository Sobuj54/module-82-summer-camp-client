import useContextApi from "./useContextApi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFindRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, isAdminLoading } = useContextApi();

  const { data: userRole, isLoading: adminIsLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/users/role?email=${user?.email}`);
      return res.data;
    },
    enabled: !isAdminLoading,
  });

  return [userRole, adminIsLoading];
};

export default useFindRole;
