import SplitView from "../../../elements/App/SplitView";
import web1 from "../../../../public/images/learn/web3/what-is-web3/web1.png";
import MainHeader from "../../../elements/MainHeader";

const P1 = (props: any) => {
  return (
    <main className="w-full h-full flex flex-col text-lg">
      <MainHeader title="Web1">Web1 </MainHeader>
      <SplitView image={web1}>
        <p className="text-xl font-sans-semibold">Web 1 - Read Only</p>
        <br />
        <p>
          Web1 was the first evolution of the internet, starting around the
          1900s. Web1 was <strong className="font-sans-semibold">read only.</strong> This was
          primarily in the form of static websites owned by companies.
        </p>
        <br />
        <p>
          The biggest winner of Web1 was undoubtly <strong className="font-sans-semibold">Google</strong>, a company that still thrives today.
        </p>
      </SplitView>
    </main>
  );
};

export default P1;
