import DrugList from '@/components/DrugList';
import React from 'react';
import useDrugList from '@/hooks/useDrugList';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const Recommend = () => {
  const { data: drugs = [], isLoading } = useDrugList();


  return (
    <>
      <div>
        <Header />
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <p className='text-xl font-bold'>약품 재고 확인하기</p>
          {!isLoading &&
            <DrugList data={drugs} />
          }
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Recommend;
