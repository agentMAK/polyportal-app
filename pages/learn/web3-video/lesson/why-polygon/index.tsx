import type { NextPage } from "next";
import Meta from "../../../../../components/header/meta"
import Lesson from "../../../../../components/app/lesson/Lesson";
import Web3Video_2 from "../../../../../components/lessons/web3-video/Web3Video_2";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Why Polygon?"></Meta>
    <Lesson slides={Web3Video_2()} redirect="/learn/web3-video/"></Lesson>
    </>
  );
};

export default index;