import axios from "axios";
import { useQuery } from "react-query";
import { Notification } from "../types/notification";

const fetchNotifications = async (): Promise<Notification[]> => {
  const { data } = await axios.get("/api/notifications");
  return data;
};

export function useNotifications() {
  return useQuery("notifications", () => fetchNotifications(), {
    suspense: false,
  });
}
