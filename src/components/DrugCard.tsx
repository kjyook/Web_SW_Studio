import React from "react";
import { useRouter } from "next/router";

interface DrugCardProps {
    data : Record<string, any>;
};

const DrugCard = ({ data } : DrugCardProps) => {
    const router = useRouter();

    return (
        <></>
    )
};

export default DrugCard;