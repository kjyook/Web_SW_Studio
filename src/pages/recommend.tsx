import DrugList from '@/components/DrugList';
import React from 'react';
import useDrugList from '@/hooks/useDrugList';
import useCurrentUser from '@/hooks/useCurrentUser';

const Recommend = () => {
  const { data: drugs = [], isLoading } = useDrugList();
  const { data } = useCurrentUser();

  return (
    <>
      <p>here is recommend drug page</p>
      <p>{data?.email}</p>
      <DrugList data={drugs} title='Recommend Drugs' />
    </>
  );
};

export default Recommend;
