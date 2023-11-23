import axios from 'axios';
import { useState, useCallback } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password,
                userId,
                role
            })
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, userId, role]);

    return (
        <>
        </>
    )
};

export default Auth;