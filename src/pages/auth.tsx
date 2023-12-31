import axios from 'axios';
import { useState, useCallback } from 'react';
import { Input } from '@/components/Input';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const Auth = () => {
    const router = useRouter();

    const [variant, setVariant] = useState('login');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const role = '사용자';

    const isEmail = () => {
        if (email === '') return true;

        let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        return regExp.test(email);
    };

    const isPassword = () => {
        if (password === '') return true;

        let regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,15}$/;

        return regPassword.test(password);
    }

    const isName = () => {
        if (name === '') return true;

        let regName = /^[가-힣]{2,4}$/;

        return regName.test(name);
    }

    const isUseable = useCallback(() => {
        let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        let regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,15}$/;
        let regName = /^[가-힣]{2,4}$/;

        if (variant === 'login') {
            if (regEmail.test(email) && regPassword.test(password)) return true;
            else return false;
        } if (variant === 'signup') {
            if (regEmail.test(email) && regPassword.test(password) && regName.test(name)) return true;
            else return false;
        }
    }, [email, name, password, variant]);

    const toggleVariant = useCallback(() => {
        setVariant((prev) => prev === 'login' ? 'signup' : 'login');
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/'
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, password])

    const register = useCallback(async () => {
        try {
            console.log(email, name, password, role)
            await axios.post('/api/register', {
                email,
                name,
                password,
                role,
                emailVerified: new Date(),
            })
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, role]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            variant === 'login' ? login() : register();
        }
    };

    return (
        <>
            <div className="bg-emerald-100 w-full h-screen bg-opacity-50">
                <div className="flex justify-center items-center w-full">
                    <div className="bg-emeral-200 bg-opacity-70 px-16 py-16 self-center my-2 lg:max-w-md rounded-md w-full">
                        <h2 className="text-black text-4xl mb-8 font-semibold">
                            {variant === 'login' ? '로그인' : '회원가입'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'signup' && (
                                <Input id="username" description="이름" secret="text" value={name} regular={isName()} onChange={(ev) => setName(ev.target.value)} onKeyPress={handleKeyPress} />
                            )}
                            <Input id="email" description="이메일 주소" secret="email" value={email} regular={isEmail()} onChange={(ev) => setEmail(ev.target.value)} onKeyPress={handleKeyPress} />
                            <Input id="password" description="비밀번호" secret="password" value={password} regular={isPassword()} onChange={(ev) => setPassword(ev.target.value)} onKeyPress={handleKeyPress} />
                            {/* {variant === 'signup' && (
                                <div>
                                    <label className="text-black" htmlFor="role">역할</label>
                                    <select className="bg-sky-100 text-zinc-400 w-full py-3 rounded-md" id="role" value={role} onChange={(ev) => setRole(ev.target.value)}>
                                        <option value="약사">약사</option>
                                        <option value="손님">사용자</option>
                                    </select>
                                </div>
                            )} */}
                        </div>
                        <button disabled={!isUseable()} onClick={variant === 'login' ? login : register} className={`bg-green-500 py-3 text-white rounded-md w-full mt-10 ${!isUseable() && 'opacity-50'}`}>
                            {variant === 'login' ? '로그인' : '회원가입'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? '리본약국 회원이 아니신가요?' : '이미 회원이신가요?'}
                            <span onClick={toggleVariant} className="text-black ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? '지금 가입하세요' : '로그인 하세요'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Auth;