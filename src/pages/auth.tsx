import axios from 'axios';
import { useState, useCallback } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password]);

    return (
        <>
        </>
    )
};

export default Auth;