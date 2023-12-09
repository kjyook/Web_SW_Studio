import React from "react";
import Image from "next/image";

interface DrugCardProps {
  data: Record<string, any>;
}

const DrugCard = ({ data }: DrugCardProps) => {
  console.log(data)

  return (
    <>
      <div className="flex flex-row justify-center items-center content-between gap-4 border-solid border-2 rounded-xl w-9/12 px-4">
        <Image src={data.image} width={100} height={100} alt={data?.name} />
        <div className="flex flex-col justify-center items-center gap-2">
          <p>{data.name}</p>
          <p>{data.price}</p>
          <p>{data.quantity}</p>
        </div>
      </div>
    </>
  );
};

export default DrugCard;
