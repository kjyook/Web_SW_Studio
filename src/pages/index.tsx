import React from 'react';
import Tabs from '@/components/Tabs/Tabs'; // 실제 파일 구조에 맞게 경로 조정
import Footer from '@/components/Footer/Footer'; 

const IndexPage = () => {
  const tabs = [
    { label: '약국소개', path: 'drugstore' },
    { label: '약품추천', path: 'page2' },
    { label: '약품신청', path: 'page3' },
    { label: '약품 재고 확인', path: 'page4' },
    { label: '이번달 건강 이슈', path: 'HotTopic' }
    // 나머지 탭들도 이와 같은 형식으로 추가...
  ];

  return (
    <div>
      <Tabs defaultTab="Main" tabs={tabs} />
      <Footer/>
    </div>
  );
};

export default IndexPage;
