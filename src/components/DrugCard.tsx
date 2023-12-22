import React from "react";
import Image from "next/image";

interface DrugCardProps {
  data: Record<string, any>;
}

const DrugCard = ({ data }: DrugCardProps) => {

  return (
    <>
      <div className="flex flex-row justify-around items-center border-solid border-2 rounded-xl w-9/12 px-2">
        <Image src={data.image} width={100} height={100} alt={data?.name} />
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="font-semibold">{data.name}</p>
          <p className="italic">{data.price}</p>
          <p className="italic text-sm">{data.quantity}</p>
        </div>
      </div>
    </>
  );
};

export default DrugCard;
