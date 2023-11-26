// index.tsx

import React from 'react';
import Tabs from '../components/Tabs'; // Adjust the path based on your actual file structure

const IndexPage = () => {
  const tabs = ['page1', 'page2', 'page3', 'page4', 'page5'];

  return (
    <div>
      <Tabs defaultTab="Main" tabs={tabs} />
    </div>
  );
};

export default IndexPage;
