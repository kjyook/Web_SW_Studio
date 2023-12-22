import { isEmpty } from "lodash";
import BulletinCard from "./BulletinCard";

interface BulletinListProps {
    data: Record<string, any>;
    title: string;
};

const BulletinList = ({ data, title }: BulletinListProps) => {
    if (isEmpty(data)) return null;

    return (
        <>
            <div>
                <div className="flex justify-center items-center text-3xl font-bold">
                    <p>{title}</p>
                </div>
                <div className="pt-10">
                    {data.map((bulletin: any) => (
                        <BulletinCard key={bulletin.id} data={bulletin} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default BulletinList;