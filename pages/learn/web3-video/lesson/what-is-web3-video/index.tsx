import type { NextPage } from "next";
import Meta from "../../../../../components/meta"
import Lesson from "../../../../../components/app/Lesson";
import Web3Video_3 from "../../../../../components/app/lessons/Web3Video_3";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - What is Web3?"></Meta>
    <Lesson slides={Web3Video_3()} redirect="/learn/web3-video/"></Lesson>
    </>
  );
};

export default index;