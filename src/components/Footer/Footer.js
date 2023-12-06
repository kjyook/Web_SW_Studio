import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className="flex flex-row py-3 justify-center items-center">
          <Image
            src="/icons/logo-removebg.png"
            width={100}
            height={100}
            alt="logo"
          />
          <div className={styles.contactInfo}>
            <p>리본약국</p>
            <p>전화번호: 02-1234-5678</p>
            <p>서울시 강남구 테헤란로 123</p>
          </div>
        </div>

        <div className={styles.socialMediaLinks}>
          <Link href="https://www.facebook.com">
            <Image
              src="/icons/facebook.png"
              width={30}
              height={30}
              alt="facebook"
            />
          </Link>
          <Link href="https://www.instagram.com">
            <Image
              src="/icons/instagram-removebg.png"
              width={45}
              height={45}
              alt="instagram"
            />
          </Link>
          <Link href="https://www.twitter.com">
            <Image
              src="/icons/twitter.png"
              width={30}
              height={30}
              alt="twitter"
            />
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
