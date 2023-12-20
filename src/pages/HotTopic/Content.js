import React from 'react';
import Tabs from '@/components/Header/Header'; // 실제 파일 구조에 맞게 경로 조정
import Footer from '@/components/Footer/Footer'; 
import styles from './Content.module.css'; // CSS 모듈 추가
import HealthBoard from '@/components/HotTopic/HealthBoard';

const HotTopic = () => {
  const tabs = [
    // 탭 목록은 동일하게 유지
  ];

  return (
    <div>
      <Tabs />
      
      <div className={styles.mainContent}>
      {/* 이달의 건강 이슈: 독감 */}
      <div className={styles['hot-topic-content']}>
        <HealthBoard /> 
        <h2>11월 Health Issue: 독감</h2>
        <h3 className="font-bold text-xl">독감 소개</h3>
        <p>독감은 인플루엔자 바이러스에 의해 발생하는 호흡기 감염증입니다. 주로 겨울철에 유행하며, 빠르게 전파될 수 있습니다.</p>
        
        <h3 className="font-bold text-xl">증상</h3>
        <ul>
          <li>고열</li>
          <li>기침</li>
          <li>인후통</li>
          <li>근육통</li>
          <li>피로감</li>
        </ul>

        <h3 className="font-bold text-xl">예방 및 치료 방법</h3>
        <ul>
          <li>독감 백신 접종</li>
          <li>손 씻기 및 개인 위생 유지</li>
          <li>기침할 때는 휴지나 팔꿈치로 입과 코를 가리기</li>
          <li>충분한 휴식과 수분 섭취</li>
        </ul>

        <h3 className="font-bold text-xl">추천 약품</h3>
        <ul>
          <li>항바이러스제: 독감 증상을 완화하고 회복 시간을 단축시킵니다.</li>
          <li>해열진통제: 고열과 근육통을 완화합니다.</li>
          <li>기침 억제제 및 가래 용해제: 호흡기 증상을 완화합니다.</li>
        </ul>

        <p>독감 증상이 있을 경우 전문가와 상담하고 적절한 치료를 받는 것이 중요합니다. 특히 고위험군에 속하는 경우 더욱 그렇습니다.</p>

        <h3 className="font-bold text-xl">추가 정보</h3>
        <p>독감에 대한 자세한 정보와 전문적인 조언을 얻기 위해 약사에게 문의하거나 관련 전문가와 상담하세요.</p>
        
      </div>
      
        
      </div>
      <Footer/>
    </div>
  );
};

export default HotTopic;
