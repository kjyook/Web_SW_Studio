import React from "react";
import { isEmpty } from 'lodash';
import DrugCard from './DrugCard';

interface MovieListProps {
    data : Record<string, any>;
    title : string;
};

const DrugList = ({ data, title }: MovieListProps) => {
    if (isEmpty(data)) return null;

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    {title}
                </p>
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