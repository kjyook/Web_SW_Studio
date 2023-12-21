import Tabs from '@/components/Header/Header'; // 실제 파일 구조에 맞게 경로 조정
import Footer from '@/components/Footer/Footer';
import React, { useState, ChangeEvent, useCallback } from 'react';
import axios from 'axios';
import Link from 'next/link';

const NewBoard = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const bulletin = useCallback(async () => {
        let write;

        console.log(title, content);

        write = await axios.post("/api/bulletin", {
            title: title,
            content: content,
        });
    }, [title, content]);

    return (
        <div>
            <Tabs />
            <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
                <div className='flex justify-center items-center'>
                    <p className='text-2xl font-bold'>질문 글 작성하기</p>
                </div>
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">제목</p>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">글</p>
                    <input
                        type="text"
                        value={content}
                        onChange={handleContentChange}
                        className="w-full h-12 p-2 border rounded"
                    />
                </div>
                <Link href='/Board/'>
                    <button
                        onClick={bulletin}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    >
                        등록
                    </button>
                </Link>
            </div>
            <Footer />
        </div>
    )
};

export default NewBoard;