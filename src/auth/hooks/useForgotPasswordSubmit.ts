import axios from "axios";
import { useMutation } from "react-query";

const forgotPasswordSubmit = async ({
  code,
  newPassword,
}: {
  code: string;
  newPassword: string;
}) => {
  const { data } = await axios.post("/api/forgot-password-submit", {
    code,
    newPassword,
  });
  return data;
};

export function useForgotPasswordSubmit() {
  const { isLoading, mutateAsync } = useMutation(forgotPasswordSubmit);
  return { isLoading, forgotPasswordSubmit: mutateAsync };
}
