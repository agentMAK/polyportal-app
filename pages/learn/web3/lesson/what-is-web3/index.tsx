import type { NextPage } from "next";
import Meta from "../../../../../components/header/meta"
import Web3_1 from '../../../../../components/lessons/web3/Web3_1'
import Lesson from "../../../../../components/app/lesson/Lesson";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Learn Web3"></Meta>
    <Lesson slides={Web3_1()} redirect="/learn/web3/"></Lesson>
    </>
  );
};

export default index;