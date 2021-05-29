import axios from "axios";
import { useQuery } from "react-query";
import { Event } from "../types/event";

const fetchEvents = async (): Promise<Event[]> => {
  const { data } = await axios.get("/api/events");
  return data;
};

export function useEvents() {
  return useQuery("events", () => fetchEvents());
}
