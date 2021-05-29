import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { removeOne } from "../../core/utils/crudUtils";
import { Event } from "../types/event";

const deleteEvent = async (eventId: string): Promise<string> => {
  const { data } = await axios.delete("/api/events", { data: eventId });
  return data;
};

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(deleteEvent, {
    onSuccess: (eventId: string) => {
      queryClient.setQueryData<Event[]>(["events"], (oldEvents) =>
        removeOne(oldEvents, eventId)
      );
    },
  });

  return { isDeleting: isLoading, deleteEvent: mutateAsync };
}
