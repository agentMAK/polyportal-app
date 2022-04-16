import SplitView from "../../../elements/App/SplitView";
import web2 from "../../../../public/images/learn/web3/what-is-web3/web2.png";
import MainHeader from "../../../elements/MainHeader";

const P2 = (props: any) => {
  return (
    <main className="w-full h-full flex flex-col text-lg">
      <MainHeader title="Web2">Web2 </MainHeader>
      <SplitView image={web2}>
        <p className="text-xl font-sans-semibold">
        Web 2 - Read and Write
        </p>
        <br /> 
        <p className="">
          The next generation of the internet was Web2, starting in around 2004.
          Web2 introduced the abilty to both
          <strong className="font-sans-semibold"> read and write</strong> on the
          internet. 
          <br /><br />  In particular, was the evolution of user-generated content.
          Anyone in the world could publish content online that could be seen by
          millions. Facebook was the biggest winner of Web2. Other big winners from web2 included Twitter, Youtube, Uber and TikTok.
        </p>
      </SplitView>
    </main>
  );
};

export default P2;
