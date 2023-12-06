import useBulletinList from "@/hooks/useBullentinList";

const BullentinPage = () => {
    const { data: bullentins = [] } = useBulletinList();

    console.log(bullentins);
    return (
        <>
        <div>게시판</div>
        {bullentins?.map((bullentin: any) => {
            <div>
                <p>{bullentin.title}</p>
                <p>{bullentin.content}</p>
            </div>
        })}
        <p>아니 왜 안찍힘? 불러진건 맞는데?</p>
        </>
    )
};

export default BullentinPage;
