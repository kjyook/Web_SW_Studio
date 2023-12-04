import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* 로고 이미지 경로는 프로젝트에 맞게 조정하세요 */}
        <img src="/logo.jpg" alt="리본약국 로고" className={styles.logo} />

        <div className={styles.contactInfo}>
          <p>리본약국</p>
          <p>전화번호: 02-1234-5678</p>
          <p>서울시 강남구 테헤란로 123</p>
        </div>

        <div className={styles.socialMediaLinks}>
          {/* Link 컴포넌트 내부에 a 태그를 넣지 않고, href 속성을 직접 Link에 전달합니다 */}
          <Link href="https://www.facebook.com">
            <img src="/icons/facebook.png" alt="Facebook" className={styles.socialIcon} />
          </Link>
          <Link href="https://www.instagram.com">
            <img src="/icons/instagram.jpeg" alt="Instagram" className={styles.socialIcon} />
          </Link>
          <Link href="https://www.twitter.com">
            <img src="/icons/twitter.png" alt="YouTube" className={styles.socialIcon} />
          </Link>
        </div>

        <div className={styles.copyRightInfo}>
          <p>COPYRIGHT © 2023 리본약국. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

