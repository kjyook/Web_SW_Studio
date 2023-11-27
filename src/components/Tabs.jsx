// Tabs.jsx

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Tabs.module.css';

const Tabs = ({ defaultTab, tabs }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <div className={styles.logo}>
          <span className={styles.ribbon}>리본</span>
          <span className={styles.pharmacy}>약국</span>
        </div>
      </Link>

      <div className={styles.tabButtonContainer}>
        {tabs.map((tab) => (
          <Link href={`/${tab.toLowerCase().replace(' ', '-')}`} key={tab}>
            <button
              onClick={() => changeTab(tab)}
              className={`${styles.tabButton} ${tab === activeTab ? styles.activeTab : ''}`}
            >
              {tab}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
