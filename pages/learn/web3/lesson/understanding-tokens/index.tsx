import type { NextPage } from "next";
import Meta from "../../../../../components/header/meta"
import Lesson from "../../../../../components/app/lesson/Lesson";
import Web3_2 from "../../../../../components/lessons/web3/Web3_2";
const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Understanding Tokens"></Meta>
    <Lesson slides={Web3_2()} redirect="/learn/web3/"></Lesson>
    </>
  );
};

export default index;