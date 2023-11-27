import DrugList from '@/components/DrugList';
import React from 'react';
import useDrugList from '@/hooks/useDrugList';

const Recommend = () => {
    const { data: drugs = [] } = useDrugList();

  return (
    <>
    <p>here is recommend drug page</p>
    <DrugList data={drugs} title='Recommend Drugs' />
    </>
  );
};

export default Recommend;
