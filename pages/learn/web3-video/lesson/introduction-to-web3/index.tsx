import type { NextPage } from "next";
import Meta from "../../../../../components/header/meta"
import Lesson from "../../../../../components/app/lesson/Lesson";
import Web3Video_1 from "../../../../../components/lessons/web3-video/Web3Video_1";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Learn Web3"></Meta>
    <Lesson slides={Web3Video_1()} redirect="/learn/web3-video/"></Lesson>
    </>
  );
};

export default index;