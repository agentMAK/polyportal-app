import SplitView from "../../../elements/App/SplitView";
import ideas from "../../../../public/images/learn/web3/what-is-web3/ideas.png";
import MainHeader from "../../../elements/MainHeader";

const P6 = (props: any) => {
  return (
    <main className="w-full h-full flex flex-col text-lg">
      <MainHeader title="Web3">Web3 Core Ideas</MainHeader>
      <SplitView image={ideas}>
        <p className="text-xl font-sans-semibold">Core Ideas that underline Web3</p>
        <p>
          <br />
          <strong className="font-sans-semibold">
            Web3 is Decentralisation </strong>
           - Decentralisation makes true ownership possible Web3. Web3 always strives to be
          decentralised as possible to in order to distribute power to users and
          creators.
        
        </p>
        <br />
        <p>
          <strong className="font-sans-semibold">Web3 is permissionless</strong>{" "}
          - This means that everyone has equal access to participate in Web3, and no
          one gets excluded. It&apos;s doesn&apos;t matter who you are, or where
          you are in the world, everyone has access.
        </p>
        <br />
        <p>
          <strong className="font-sans-semibold">Web3 is user-owned</strong> -
          Unlike traditional big tech companies like Google and Facebook, that
          take ownership away from creators, Web3 focus on bring power back to
          creators. Web3 enables users to own their data, identity and
          communities they have online.
        </p>
      </SplitView>
    </main>
  );
};

export default P6;
