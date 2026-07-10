import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/src/services/userService";

export const useUsers = (
  role?: string,
  keyword?: string
) => {
  return useQuery({
    queryKey: ["users", role, keyword],
    queryFn: () => getUsers({ role, keyword }),
  });
};