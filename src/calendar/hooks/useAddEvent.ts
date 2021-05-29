import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { addOne } from "../../core/utils/crudUtils";
import { Event } from "../types/event";

const addEvent = async (event: Event): Promise<Event> => {
  const { data } = await axios.post("/api/events", event);
  return data;
};

export function useAddEvent() {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(addEvent, {
    onSuccess: (event: Event) => {
      queryClient.setQueryData<Event[]>(["events"], (oldEvents) =>
        addOne(oldEvents, event)
      );
    },
  });

  return { isAdding: isLoading, addEvent: mutateAsync };
}
