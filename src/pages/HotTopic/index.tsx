import React from 'react';
import Tabs from '@/components/Header/Header'; // 실제 파일 구조에 맞게 경로 조정
import Footer from '@/components/Footer/Footer'; 
import styles from './HotTopic.module.css'; // CSS 모듈 추가
import HealthBoard from '@/components/HotTopic/HealthBoard';

const HotTopic = () => {
  const tabs = [
    { label: '약국소개', path: 'drugstore' },
    { label: '약품추천', path: 'page2' },
    { label: '약품신청', path: 'page3' },
    { label: '약품 재고 확인', path: 'page4' },
    { label: '이번달 건강 이슈', path: 'HotTopic' }
  ];

  return (

    <div>
      <Tabs defaultTab="Main" tabs={tabs} />
      
      <div className={styles.mainContent}>
      {/* 이달의 건강 이슈: 불면증 */}
      <div className={styles['hot-topic-content']}>
        <h2>12월 건강 이슈: 불면증</h2>
        <h3>불면증 소개</h3>
        <p>불면증은 수면을 취하는 데 어려움을 겪는 상태를 말합니다. 이는 잠들기 어려움, 자주 깨는 문제, 일찍 깨어나는 것 등을 포함할 수 있습니다.</p>
        
        <h3>증상</h3>
        <ul>
          <li>잠들기 어려움</li>
          <li>수면 중 자주 깨는 현상</li>
          <li>아침 일찍 깨어남</li>
          <li>낮 동안 피곤함 또는 졸림</li>
        </ul>

        <h3>완화 방법</h3>
        <ul>
          <li>카페인 섭취 줄이기</li>
          <li>규칙적인 수면 습관 유지</li>
          <li>스트레스 관리하기</li>
          <li>편안한 수면 환경 조성</li>
        </ul>

        <h3>추천 영양제</h3>
       
        <ul>
          <li>멜라토닌: 수면 주기를 조절하는 데 도움이 될 수 있는 자연 발생 호르몬.</li>
          <li>마그네슘: 신체의 스트레스 반응을 완화하고, 더 나은 수면을 촉진할 수 있습니다.</li>
          <li>비타민 D: 특히 비타민 D가 부족한 경우, 수면의 질을 향상시킬 수 있습니다.</li>
          <li>발레리안 루트: 수면을 촉진하고 불안을 감소시키는 데 도움이 될 수 있는 허브 보충제입니다.</li>
        </ul>

        <p>이러한 보충제는 자가 치료 전에 전문가와 상담하여 사용하는 것이 좋습니다. 특히 다른 약물을 복용 중인 경우, 상호작용에 대해 의사의 조언을 받아야 합니다.</p>

        <h3>추가 정보</h3>
        <p>불면증에 대한 추가 정보와 전문적인 조언을 얻기 위해 약사에게 문의하거나 관련 전문가와 상담하세요.</p>
        
      </div>
      <HealthBoard /> 
        
      </div>
      <Footer/>
    </div>
  );
};

export default HotTopic;
