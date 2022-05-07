import type { NextPage } from "next";
import Meta from "../../../../../components/meta"
import Lesson from "../../../../../components/app/Lesson";
import Web3Video_4 from "../../../../../components/app/lessons/Web3Video_4";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Core ideas of Web3"></Meta>
    <Lesson slides={Web3Video_4()} redirect="/learn/web3-video/"></Lesson>
    </>
  );
};

export default index;