import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useBulletinList = () => {
  const { data, error, isLoading } = useSWR("/api/bullentins", fetcher, {
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

export default useBulletinList;
