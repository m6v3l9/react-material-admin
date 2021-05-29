import axios from "axios";
import { useMutation } from "react-query";
import { UserInfo } from "../types/userInfo";

const register = async (userInfo: UserInfo): Promise<UserInfo> => {
  const { data } = await axios.post("/api/register", userInfo);
  return data;
};

export function useRegister() {
  const { isLoading, mutateAsync } = useMutation(register);
  return { isRegistering: isLoading, register: mutateAsync };
}
