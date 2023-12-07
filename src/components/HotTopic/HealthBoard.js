import React from 'react';
import Link from 'next/link';
import styles from './HealthBoard.module.css';

const HealthBoard = () => {
  const months = [
    '2023년 1월', '2023년 2월', '2023년 3월', '2023년 4월',
    '2023년 5월', '2023년 6월', '2023년 7월', '2023년 8월',
    '2023년 9월', '2023년 10월', '2023년 11월'
  ];

  return (
    <div className={styles.board}>
      <h2>건강 이슈 목차</h2>
      <ul>
        {months.map((month, index) => (
          <li key={index}>
            {/* 모든 링크가 Content.js로 이동합니다 */}
            <Link href="/HotTopic/Content">
              {month}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthBoard;
