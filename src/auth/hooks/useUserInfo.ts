import axios from "axios";
import { useQuery } from "react-query";
import { UserInfo } from "../types/userInfo";

const fetchUserInfo = async (key?: string): Promise<UserInfo> => {
  const { data } = await axios.get("/api/user-info", { params: { key } });
  return data;
};

export function useUserInfo(key?: string) {
  return useQuery(["user-info", key], () => fetchUserInfo(key), {
    enabled: !!key,
  });
}
