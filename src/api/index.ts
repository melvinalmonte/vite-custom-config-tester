import { QueryClient, useQuery } from "@tanstack/react-query";

import axios from "axios";
import { configStore } from "../stores/config";
import { snapshot } from "valtio";

export const queryClient = new QueryClient();

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function usePostQuery() {
  return useQuery<IPost[], Error>({
    queryKey: ["todos"],
    queryFn: async () => {
      const config = snapshot(configStore).config; // <-- this is how we access the config values from valtio store, via a snapshot of our state.
      const { data } = await axios(config.apiURL);

      return data;
    },
  });
}
export { usePostQuery };
