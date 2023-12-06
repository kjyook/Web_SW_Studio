import React from 'react';
import Image from 'next/image';
import logoImage from 'public/logo.jpg';
import MyCarousel from '@/components/MyCarousel';
import styles from './drugstore.module.css';
import Tabs from '@/components/Header/Header';

const DrugStore = () => {
  const images = [
    { src: 'store_outdoor_2.png', alt: 'Image 1', caption: 'Caption 1' },
    { src: 'store_indoor_1.png', alt: 'Image 2', caption: 'Caption 2' },
    { src: 'store_indoor_2.png', alt: 'Image 3', caption: 'Caption 3' },
  ];
    return (
      <div className={styles.mainPage}>
        <Tabs />
        <div className={styles.topSection}>
          <div className={styles.titleArea}>
            <Image src={logoImage} width={100} height={100} alt='logo'/>
            <div className={styles.titleSubArea}>
              <span className={`${styles.reborn} ${styles.title}`}>리본</span><span className={`${styles.reborn} ${styles.title}`}>약국</span>
            </div>
          </div>
          <div className={styles.titleInfoArea}>
            <p className={styles.titleInfo}>Re Born PHARMACY</p>
          </div>
          <p>
            <span className={styles.infoTitle}>Re Born</span>: 다시 태어나다. <br/>
            친절하게 상담을 진행하고 탁월한 복약지도를 해드립니다. <br/>
            리본 약국의 웹 서비스는 환자분들이 필요한 약품을 추천해드리고 예약할 수 있는 기능을 제공합니다. <br/>
            새로운 약국 서비스를 경험해보세요!
          </p>
        </div>
        <div className={styles.bottomSection}>
          <MyCarousel images={images} />
        </div>
      </div>
    )
}

export default DrugStore;