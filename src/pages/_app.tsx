import { RoutingGuard } from '@/models/RoutingGuard'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useNavigation } from '@/hooks/useNavigation';

export const App = ({ Component, pageProps }: AppProps) => {
  /* const { router } = useNavigation();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      RoutingGuard();
      console.log('Route is changing to', url);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]); */

  return <Component {...pageProps} />
};

export default App;
