import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { ProfileInfo } from "../types/profileInfo";

const updateProfileInfo = async (
  profileInfo: ProfileInfo
): Promise<ProfileInfo> => {
  const { data } = await axios.put("/api/profile-info", profileInfo);
  return data;
};

export function useUpdateProfileInfo() {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(updateProfileInfo, {
    onSuccess: (profileInfo: ProfileInfo) => {
      queryClient.setQueryData(["profile-info"], profileInfo);
    },
  });

  return { isUpdating: isLoading, updateProfileInfo: mutateAsync };
}
