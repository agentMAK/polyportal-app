import SplitView from "../../../elements/App/SplitView";
import fungible from "../../../../public/images/learn/web3/understanding-tokens/fungible.png";
import MainHeader from "../../../elements/MainHeader";

const P1 = (props: any) => {
  return (
    <main className="w-full h-full flex flex-col text-lg">
      <MainHeader title="Web1">Types of Tokens</MainHeader>
      <SplitView image={fungible}>
      <p>Anyone can create, interact with and trade tokens. In Web3, there are 2 main types of tokens.</p>
        <p>
          <br />
          <strong className="font-sans-semibold">Fungible Tokens</strong> - These are tokens that are traded on equal terms and are
completely interchangeable with each other. Fungible
tokens include Bitcoin, Ether and Matic.
        </p>
        <br />
        <p>
          <strong className="font-sans-semibold">Non-Fungible Tokens (NFTs)</strong> -
          These are unique,
non-identical tokens, that cannot be traded on equal terms. Non-fungible tokens include Bored Yacht Ape Club and
Cryptopunks.
        </p>
      </SplitView>
    </main>
  );
};

export default P1;
