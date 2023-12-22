import React from "react";
import { isEmpty } from 'lodash';
import DrugCard from './DrugCard';

interface MovieListProps {
    data : Record<string, any>;
};

const DrugList = ({ data }: MovieListProps) => {
    if (isEmpty(data)) return null;

    return (
        <div className="px-4 md:px-12 my-4 space-y-8 w-full">
            <div>
                <div className="flex flex-col justify-center items-center gap-2 w-full h-full">
                    {data.map((movie: any) => (
                        <DrugCard key={movie.id} data={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default DrugList;