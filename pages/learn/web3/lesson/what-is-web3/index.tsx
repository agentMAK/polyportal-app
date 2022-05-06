import type { NextPage } from "next";
import Meta from "../../../../../components/meta"
import Web3_1 from '../../../../../components/app/lessons/Web3_1'
import Lesson from "../../../../../components/app/Lesson";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Learn Web3"></Meta>
    <Lesson slides={Web3_1()} redirect="/learn/web3/old"></Lesson>
    </>
  );
};

export default index;