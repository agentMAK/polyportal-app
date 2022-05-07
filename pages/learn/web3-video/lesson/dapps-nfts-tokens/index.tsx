import type { NextPage } from "next";
import Meta from "../../../../../components/meta"
import Lesson from "../../../../../components/app/Lesson";
import Web3Video_5 from "../../../../../components/app/lessons/Web3Video_5";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - NFTs and Tokens"></Meta>
    <Lesson slides={Web3Video_5()} redirect="/learn/web3-video/"></Lesson>
    </>
  );
};

export default index;