// Tabs.jsx

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Tabs.module.css';

export const Tabs = ({ defaultTab, tabs }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const changeTab = (tabPath) => {
    setActiveTab(tabPath);
  };
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
            <button
              onClick={() => changeTab(path)}
              className={`${styles.tabButton} ${path === activeTab ? styles.activeTab : ''}`}
            >
              {label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;