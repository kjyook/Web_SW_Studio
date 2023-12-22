import React from 'react';

interface InputProps {
    id: string
    description: string;
    secret: string;
    value: string;
    regular?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ id, description, secret, value, regular, onChange, onKeyPress }) => {
    return (
        <>
            <div className='relative'>
                <input
                    id={id}
                    className='
            block
            rounded-md
            px-6
            pt-6
            pb-1.5
            w-full 
            text-md
            text-black
            bg-sky-100 
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
            '
                    type={secret}
                    value={value}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    placeholder=""
                />
                <label
                    className='
            absolute
            text-md
            text-zinc-400 
            transform
            -translate-y-3
            scale-75
            top-3.5
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            '
                    htmlFor={id}
                >{description}</label>
                {secret === 'email' && !regular ? <span className='text-sm text-red-600'>유효한 이메일 주소를 입력하세요</span> : ''}
                {secret === 'text' && !regular ? <span className='text-sm text-red-600'>한국 이름을 2~4자 입력해주세요</span> : ''}
                {secret === 'password' && !regular ? <span className='text-sm text-red-600'>비밀번호는 숫자와 영문으로 4~15자 입력하세요</span> : ''}
            </div>
        </>
    );
};
