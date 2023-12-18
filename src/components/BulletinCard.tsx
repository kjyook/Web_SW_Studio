import { useNavigation } from "@/hooks/useNavigation";

interface BulletinCardProps {
    data: Record<string, any>;
};

const BulletinCard = ({ data }: BulletinCardProps) => {
    const router = useNavigation();

    return (
        <>
            <div className="border-b-2 border-solid">
                <p className="font-semibold text-xl">{data.title}</p>
                <p>{data.content}</p>
                {data.comments.map((comment: any) => (
                    <div key={comment.id}>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BulletinCard;