import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface DrugCardProps {
  data: Record<string, any>;
}

const DrugCard = ({ data }: DrugCardProps) => {

  return (
    <>
      <p>{data.name}</p>
      <p>{data.price}</p>
      <p>{data.quantity}</p>
      <Image src={data.image} width={30} height={30} alt={data?.name} />
    </>
  );
};

export default DrugCard;
