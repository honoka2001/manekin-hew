import '../styles/globals.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === '/auth/login' || router.pathname === '/auth/registration') return;
        requireLogin();
    }, [router.pathname]);

    const requireLogin = () => {
        axios
            .get('http://localhost:3000/login', { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
                router.push('/auth/login');
            });
    };

    return <Component {...pageProps} />;
}

export default MyApp;
