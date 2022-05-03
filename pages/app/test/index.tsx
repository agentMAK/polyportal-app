import type { NextPage } from "next";
import MainHeader from "../../../components/elements/MainHeader";
import Meta from "../../../components/meta";
import Lesson from "../../../components/app/Lesson";
import Web3_1 from '../../../components/app/lessons/Web3_1'

const Test: NextPage = (props: any) => {

  return (
    <div>
      <Meta title="PolyPortal - Learn Web3"></Meta>
      <div className='h-20 w-full border-b-gray400 border-b-4'>

      </div>
      <div className="max-w-md mx-auto mt-20">
        <Lesson slides={Web3_1()} redirect="/learn/web3"></Lesson>
      </div>
    </div>
  );
};

export default Test;
