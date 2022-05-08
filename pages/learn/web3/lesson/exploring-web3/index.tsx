import type { NextPage } from "next";
import Meta from "../../../../../components/header/meta"
import Lesson from "../../../../../components/app/lesson/Lesson";
import Web3_3 from "../../../../../components/lessons/web3/Web3_3";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Exploring Web3"></Meta>
    <Lesson slides={Web3_3()} redirect="/learn/web3/"></Lesson>
    </>
  );
};

export default index;