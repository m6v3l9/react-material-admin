import axios from "axios";
import { useMutation } from "react-query";

const updatePassword = async ({
  oldPassword,
  newPassword,
}: {
  oldPassword: string;
  newPassword: string;
}) => {
  const { data } = await axios.put("/api/password", {
    oldPassword,
    newPassword,
  });
  return data;
};

export function useUpdatePassword() {
  const { isLoading, mutateAsync } = useMutation(updatePassword);
  return { isUpdating: isLoading, updatePassword: mutateAsync };
}
