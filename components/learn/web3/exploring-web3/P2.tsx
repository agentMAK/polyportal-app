import SplitView from "../../../elements/App/SplitView";
import pooltogether from "../../../../public/images/learn/web3/exploring-web3/pooltogether.webp";
import MainHeader from "../../../elements/MainHeader";

const P2 = (props: any) => {
  return (
    <main className="w-full h-full flex flex-col text-lg">
      <MainHeader title="Web2">PoolTogether</MainHeader>
      <SplitView image={pooltogether} margin={10}>
      <p className="text-xl">
        PoolTogether is a service that lets users stake cryptocurrency into lottery pools for a chance to win a significant weekly prize pool.
        </p>
        <br />
        <p className="text-xl">
          Try it out at: 
          <a
            href="https://app.pooltogether.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-sans-semibold text-primary hover:underline"
          > app.pooltogether.com
          </a>
        </p>
      </SplitView>
    </main>
  );
};

export default P2;
