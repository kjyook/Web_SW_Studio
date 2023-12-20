import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Board.module.css'; // CSS 모듈
import Tabs from '@/components/Header/Header'; // 실제 파일 구조에 맞게 경로 조정
import Footer from '@/components/Footer/Footer';
import useBulletinList from '@/hooks/useBullentinList';

const BoardPage = () => {
  const tabs = [
    { label: '약국소개', path: 'drugstore' },
    { label: '약품추천', path: 'page2' },
    { label: '약품신청', path: 'page3' },
    { label: '약품 재고 확인', path: 'page4' },
    { label: '이번달 건강 이슈', path: 'HotTopic' }
  ];

  const { data: bulletins = [] } = useBulletinList();

  return (

    <div>
      <Tabs />
      <div className={styles.boardContainer}>

        <h1>질문 게시판</h1>
        <div className={styles.bulletinList}>
          {bulletins.map((bulletin: Record<string, any>) => (
            <Link key={bulletin.id}
              href={{
                pathname: `/Board/${bulletin.id}`,
                query: { board: JSON.stringify(bulletin) }
              }}
              >
              <div className={styles.bulletin}>
                <h2>{bulletin.title}</h2>
                <p>{bulletin.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BoardPage;