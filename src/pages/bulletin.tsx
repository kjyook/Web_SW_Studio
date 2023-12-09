import useBulletinList from "@/hooks/useBullentinList";
import axios from "axios";
import { useCallback } from "react";

const BulletinPage = () => {
  const { data: bulletins = [] } = useBulletinList();

  const bulletin = useCallback(async () => {
    let write;

    write = await axios.post("api/bullentin", {
      bullentinId: "123123123",
      title: "rmfmfmfmfmfm",
      content: "내dkdkkdkdk용내용",
    });
  }, []);

  const comment = useCallback(async () => {
    let write;

    write = await axios.post("api/comment", { content: "댓글댓글", bullentinId: "65707997e18b7843bb76d7b0" });
  }, []);

  /* let temp;
  temp = await axios.post('api/bullentin', {}); */

  console.log(bulletins);
  return (
    <>
      <div>게시판</div>
      {bulletins?.map((bullentin: any) => {
        <div>
          <p>{bullentin.title}</p>
          <p>{bullentin.content}</p>
        </div>;
      })}
      <p>아니 왜 안찍힘? 불러진건 맞는데?</p>
      <button onClick={bulletin}>게시글</button> <br />
      <button onClick={comment}>댓글</button>
    </>
  );
};

export default BulletinPage;
