import React, { useState } from 'react';
import Link from 'next/link';
import styles from './HealthBoard.module.css';

const HealthBoard = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const months = [
    '1월','2월','3월','4월','5월','6월','7월','8월',
    '9월','10월','11월','12월'
  ];

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  }

  const getLinkPath = (month) => {
    // 12월을 클릭했을 때만 다른 경로로 이동하도록 설정
    return month === '12월' ? '/HotTopic' : '/HotTopic/Content';
  }

  return (
    <div className={styles.board}>
      <h3>
        2023 Health Issues
        <span className={`${styles['toggle-icon']} ${isListVisible ? styles['open'] : ''}`}
              onClick={toggleListVisibility}></span>
      </h3>
      {isListVisible && (
        <ul>
          {months.map((month, index) => (
            <li key={index}>
              {/* 동적으로 경로 결정 */}
              <Link href={getLinkPath(month)}>
                {month}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HealthBoard;

