import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { updateOne } from "../../core/utils/crudUtils";
import { User } from "../types/user";

const updateUser = async (user: User): Promise<User> => {
  const { data } = await axios.put("/api/users", user);
  return data;
};

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(updateUser, {
    onSuccess: (user: User) => {
      queryClient.setQueryData<User[]>(["users"], (oldUsers) =>
        updateOne(oldUsers, user)
      );
    },
  });

  return { isUpdating: isLoading, updateUser: mutateAsync };
}
