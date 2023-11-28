import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useDrugList = () => {
    const { data, error, isLoading } = useSWR("/api/drugs", fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
};

export default useDrugList;