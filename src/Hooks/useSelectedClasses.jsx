import { useQuery } from "@tanstack/react-query";
import useContextApi from "./useContextApi";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user } = useContextApi();
  const axiosSecure = useAxiosSecure();

  const {
    data: selectedClasses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/classes/selected?email=${user.email}`
      );
      return res.data;
    },
  });

  return [selectedClasses, isLoading, refetch];
};

export default useSelectedClasses;
