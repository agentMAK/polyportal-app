import SplitView from "../../../elements/App/SplitView"
import nft from "../../../../public/images/learn/web3/understanding-tokens/nftgallery.png";
import MainHeader from "../../../elements/MainHeader"

const P3 = (props:any) => {
    return (<main className='w-full h-full flex flex-col text-lg'>
        <MainHeader title="Web3">Non-Fungible Tokens (NFTs)</MainHeader>
        <SplitView image={nft}>
        <p>
        NFTs have become massively popular right now and have many different use cases:
        </p>
        <p>
          <br />
          <strong className="font-sans-semibold">Digital Art</strong> - NFTs can used to create digital art. NFTs create scarcity by limitng the number of owners a particular piece of art has. This has lead to NFTs selling for milions. 
        </p>
        <br />
        <p>
          <strong className="font-sans-semibold">Gaming</strong> - 
          In-game items is massively growing area of gaming. With NFTs, you can truly
own the asset you acquire during playing a game. This NFTs can then be trade for real
monetary value.
        </p>
        <br />
        <p>
          <strong className="font-sans-semibold">Membership & Access</strong> - NFTs can be used memberships and access. A particular NFT may give membership to
a community or access to member only content. The NFT may be used provide access
to private events or conference. 

        </p>
        </SplitView>
      </main>
    )
  }


export default P3

