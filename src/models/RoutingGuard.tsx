/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from "@/hooks/useNavigation";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect } from "react";

export const RoutingGuard = () => {
    const { data: user } = useCurrentUser();
    const { navigateTo, getCurrentPath } = useNavigation();

    console.log(user);

    //여기에 보호될 페이지들 전부 작성하시면 됩니다.
    const protectedPages = ['/', '/bulletin', '/recommend', 'application'];

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