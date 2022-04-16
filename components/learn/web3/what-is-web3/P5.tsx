import SplitView from "../../../elements/App/SplitView";
import tech from "../../../../public/images/learn/web3/what-is-web3/tech.png";
import MainHeader from "../../../elements/MainHeader";

const P5 = (props: any) => {
  return (
    <main className="w-full h-full flex flex-col text-lg">
      <MainHeader title="Web3">Core Technologies</MainHeader>
      <SplitView image={tech}>
        <p className="text-xl font-sans-semibold">Core Technologies that underline Web3</p>
        <p>
          <br />
          <strong className="font-sans-semibold">Blockchain</strong> - The
          blockchain is a highly secure and decentralised network. No centralised authority has control over the blockchain, which is why it&apos;s the backbone of Web3.
        </p>
        <br />
        <p>
          <strong className="font-sans-semibold">Smart contracts</strong> -
          Smart contracts are tamper-proof programs that run on the blockchain.
          These  smart contracts are used to create decentralised applications, also
          known as dApps.
        </p>
        <br />
        <p>
          <strong className="font-sans-semibold">Tokens</strong> - In Web3, anyone can create that is backed by the security the
          blockchain. These interactive and tradable tokens have enabled
          entirely new industries to be created and new business model to be
          formed.
        </p>
      </SplitView>
    </main>
  );
};

export default P5;
