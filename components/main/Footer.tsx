import Image from 'next/image'
import Link from 'next/link'
import discord from "../../public/images/icons/discordlogo.svg";
import twitter from "../../public/images/icons/twitterlogo.svg";

const Footer = (props:any) => {
    return (<div className="flex flex-col items-center md:flex-row md:items-start gap-y-6 h-5 w-full justify-between pb-32">
    <div className="md:hidden">
      <a className="mr-3" href="https://twitter.com/PolyPortalHQ">
        <Image src={twitter} alt="Twitter" height={20} width={20} />
      </a>
      <a href="https://discord.gg/DTeRCGuHKq">
      <Image src={discord} alt="Discord" height={20} width={20} />
      </a>
    </div>
  <div className="flex w-fit h-full">
    <div className="hidden md:block">
      <a className="mr-3" href="https://twitter.com/PolyPortalHQ">
        <Image src={twitter} alt="Twitter" height={20} width={20} />
      </a>
      <a href="https://discord.gg/DTeRCGuHKq">
      <Image src={discord} alt="Discord" height={20} width={20} />
      </a>
    </div>
    <p className="text-sm my-auto ml-3">
       Built with <a className="hover:underline" href="https://finity.polygon.technology/">Finity</a>
    </p>
  </div>
  <div className="w-fit bg-blue">
    <p className="text-sm my-auto mr-3">
      <Link href="/"><a className="hover:underline">Terms and Conditions</a></Link> &nbsp; &nbsp; &nbsp;{" "}
      <a className="hover:underline" href="/privacy-policy"  target="_blank" rel="noopener noreferrer" >Privacy Policy</a>{" "}
    </p>
  </div>
</div>
    )
  }

  export default Footer

