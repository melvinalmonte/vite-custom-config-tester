import { QueryClient, useQuery } from "@tanstack/react-query";

import { appConfig } from "../config";
import axios from "axios";

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
      const config = await appConfig;
      const { data } = await axios(config.apiURL);
      
      return data;
    },
  });
}
export { usePostQuery };
