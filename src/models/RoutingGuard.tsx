/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from "@/hooks/useNavigation";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect } from "react";

export const RouteController = () => {
    const { data: user } = useCurrentUser();
    const { navigateTo, getCurrentPath } = useNavigation();

    //여기에 보호될 페이지들 전부 작성하시면 됩니다.
    const protectedPages = ['/'];

    useEffect(() => {
        const currentPath = getCurrentPath();

        if (protectedPages.includes(currentPath) && !user) {
            navigateTo({ path: '/auth' });
        };
        
        if (currentPath === '/auth' && user) {
            navigateTo({ path: '/' });
        };

    }, [getCurrentPath, navigateTo, user, protectedPages]);

};