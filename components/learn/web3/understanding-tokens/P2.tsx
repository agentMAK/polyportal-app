import SplitView from "../../../elements/App/SplitView";
import maticToken from "../../../../public/images/learn/web3/understanding-tokens/matictoken.png";
import MainHeader from "../../../elements/MainHeader";

const P2 = (props: any) => {
  return (
    <main className="w-full h-full flex flex-col text-lg">
      <MainHeader title="Web2">Fungible Tokens</MainHeader>
      <SplitView image={maticToken} margin={10}>
        <p>
          There are various use cases for fungible tokens in crypto:
        </p>
        <p>
          <br />
          <strong className="font-sans-semibold">Currency</strong> - This is
          most the basic use case. We can use tokens as currency to exchange
          goods and services in the economy. Examples include USDC and USDT.
        </p>
        <br />
        <p>
          <strong className="font-sans-semibold">Goverance</strong> - 
          Governance tokens can represent voting power for a blockchain project.
          This means that token can be used to create and vote on governance
          proposals which influence the direction and characteristics of a
          protocol.
        </p>
        <br />
        <p>
          <strong className="font-sans-semibold">Assets</strong> - Token can
          represent assets. This could equity in a company through stock, or it
          represent real world assets such as real estate, gold and silver.
        </p>
      </SplitView>
    </main>
  );
};

export default P2;
