// Tabs.jsx

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import SideBar from "../SideBar";
import { useRouter } from "next/router";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();

  const tabs = [
    { label: "약국소개", path: "drugstore" },
    { label: "질문게시판", path: "Board" },
    { label: "약품신청", path: "application" },
    { label: "약품 재고 확인", path: "recommend" },
    { label: "이번달 건강 이슈", path: "HotTopic" },
    // 나머지 탭들도 이와 같은 형식으로 추가...
  ];

  return (
    <>
      <div className={styles.headerContainer}>
        <Link href="/drugstore" className={styles.pharmacyName}>
          <div className={styles.logo}>
            <Image src="/icons/logo-removebg.png" width={75} height={75} alt='logo' />
            <span className={styles.ribbon}>리본</span>
            <span className={styles.pharmacy}>약국</span>
          </div>
        </Link>

        <div className={styles.tabButtonContainer}>
          {tabs.map(({ label, path }) => (
            <Link href={`/${path}`} key={path}>
              <button className={`${styles.tabButton} ${router.pathname === `/${path}` ? styles.activeTab : ''}`}>{label}</button>
            </Link>
          ))}
        </div>
        <div
          onClick={() => setSidebar((val) => !val)}
          className="md:hidden text-3xl"
        >
          <RiArrowDropDownLine
            className={`transition ${sidebar ? "rotate-180" : "rotate-0"}`}
          />
        </div>
          <SideBar visible={sidebar} tabs={tabs} />
      </div>
    </>
  );
};

export default Header;
