import SplitView from "../../../elements/App/SplitView";
import web3 from "../../../../public/images/learn/web3/what-is-web3/web3.png";
import MainHeader from "../../../elements/MainHeader";

const P4 = (props: any) => {
  return (
    <main className="w-full h-full flex flex-col text-lg">
      <MainHeader title="Web3">Web3</MainHeader>
      <SplitView image={web3}>
        <p className="text-xl font-sans-semibold">Web3 - Read, Write and Own</p>
        <br />
        <p>
          Web3 introduces is the ability to truly own digital asset, natively on
          the internet. This has never been possible before.
        </p>
        <br/>
        <p>
          In web2, we delegate our data, content and trust to third-party
          platform such as Facebook,  Google.
        </p>
        <br />
        <p>
          Web3 enables true ownership in the sense that no one, not even the
          creators, can take this ownership away. As such, this simple
          capability is going to changes the internet as we know it, forever.
        </p>
      </SplitView>
    </main>
  );
};

export default P4;
