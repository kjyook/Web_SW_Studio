import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Board.module.css'; // CSS 모듈
import { Bulletin } from '@prisma/client';
import Tabs from '@/components/Header/Header'; // 실제 파일 구조에 맞게 경로 조정
import Footer from '@/components/Footer/Footer'; 

const BoardPage = () => {
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const tabs = [
    { label: '약국소개', path: 'drugstore' },
    { label: '약품추천', path: 'page2' },
    { label: '약품신청', path: 'page3' },
    { label: '약품 재고 확인', path: 'page4' },
    { label: '이번달 건강 이슈', path: 'HotTopic' }
  ];


  useEffect(() => {
    // 게시글 데이터 불러오기
    const fetchBulletins = async () => {
      try {
        const response = await fetch('/api/bulletins');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setBulletins(data);
      } catch (error) {
        console.error('Failed to fetch bulletins:', error);
      }
    };

    fetchBulletins();
  }, []);

  return (

  <div>
    <Tabs />
    <div className={styles.boardContainer}>
      
      <h1>질문 게시판</h1>
      <div className={styles.bulletinList}>
        {bulletins.map((bulletin) => (
          <Link key={bulletin.id} href={`/Board/${bulletin.id}`}>
            <div className={styles.bulletin}>
              <h2>{bulletin.title}</h2>
              <p>{bulletin.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default BoardPage;