// Tabs.jsx

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Tabs.module.css';

export const Header = () => {
  const tabs = [
    { label: '약국소개', path: 'drugstore' },
    { label: '약품추천', path: 'page2' },
    { label: '약품신청', path: 'page3' },
    { label: '약품 재고 확인', path: 'page4' },
    { label: '이번달 건강 이슈', path: 'HotTopic' }
    // 나머지 탭들도 이와 같은 형식으로 추가...
  ];

  return (
    <div className={styles.headerContainer}>
      <Link href="/drugstore">
        <div className={styles.logo}>
          <span className={styles.ribbon}>리본</span>
          <span className={styles.pharmacy}>약국</span>
        </div>
      </Link>

      <div className={styles.tabButtonContainer}>
        {tabs.map(({ label, path }) => (
          <Link href={`/${path}`} key={path}>
            <button className={styles.tabButton}>
              {label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;