import type { NextPage } from "next";
import Meta from "../../../../../components/meta"
import Lesson from "../../../../../components/app/Lesson";
import Web3_2 from "../../../../../components/app/lessons/Web3_2";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Understanding Tokens"></Meta>
    <Lesson slides={Web3_2()} redirect="/learn/web3/old"></Lesson>
    </>
  );
};

export default index;