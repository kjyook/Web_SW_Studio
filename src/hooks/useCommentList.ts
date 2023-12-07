import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useCommentList = () => {
  const { data, error, isLoading } = useSWR("/api/comments", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useCommentList;
