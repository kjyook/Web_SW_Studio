import React from "react";
import { useRouter } from "next/router";

interface DrugCardProps {
  data: Record<string, any>;
}

const DrugCard = ({ data }: DrugCardProps) => {
  const router = useRouter();

  return (
    <>
      <p>{data.name}</p>
      <p>{data.price}</p>
      <p>{data.quantity}</p>
    </>
  );
};

export default DrugCard;
