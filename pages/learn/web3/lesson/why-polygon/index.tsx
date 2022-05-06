import type { NextPage } from "next";
import Meta from "../../../../../components/meta"
import Lesson from "../../../../../components/app/Lesson";
import Web3Video_2 from "../../../../../components/app/lessons/Web3Video_2";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Why Polygon?"></Meta>
    <Lesson slides={Web3Video_2()} redirect="/learn/web3/"></Lesson>
    </>
  );
};

export default index;