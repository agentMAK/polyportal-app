import type { NextPage } from "next";
import Meta from "../../../../../components/meta"
import Lesson from "../../../../../components/app/Lesson";
import Web3Video_1 from "../../../../../components/app/lessons/Web3Video_1";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Learn Web3"></Meta>
    <Lesson slides={Web3Video_1()} redirect="/learn/web3/"></Lesson>
    </>
  );
};

export default index;