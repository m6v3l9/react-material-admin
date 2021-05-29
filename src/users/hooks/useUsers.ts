import axios from "axios";
import { useQuery } from "react-query";
import { User } from "../types/user";

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get("/api/users");
  return data;
};

export function useUsers() {
  return useQuery("users", () => fetchUsers());
}
