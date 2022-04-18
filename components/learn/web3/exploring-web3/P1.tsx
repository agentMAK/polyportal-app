import SplitView from "../../../elements/App/SplitView";
import uniswap from "../../../../public/images/learn/web3/exploring-web3/uniswap.svg";
import MainHeader from "../../../elements/MainHeader";

const P1 = (props: any) => {
  return (
    <main className="w-full h-full flex flex-col text-lg">
      <MainHeader title="Web1">Uniswap</MainHeader>
      <SplitView image={uniswap}>
        <p className="text-xl">
          Uniswap is a decentralised exchange for trading crypto tokens
        </p>
        <br />
        <p className="text-xl">
          Try it out at: 
          <a
            href="https://app.uniswap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-sans-semibold text-primary hover:underline"
          > www.app.uniswap.org
          </a>
        </p>
      </SplitView>
    </main>
  );
};

export default P1;
