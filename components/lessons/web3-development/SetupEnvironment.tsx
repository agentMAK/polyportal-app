import TextBlock from "../../app/content-blocks/TextBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import ListBlock from "../../app/content-blocks/ListBlock";
import Slides from "../../app/slides/Slides";
import SubHeaderBlock from "../../app/content-blocks/SubHeaderBlock";
import vscodedev from '../../../public/images/lessons/setup-environment/vscode-dev.png'
import download from '../../../public/images/lessons/setup-environment/download.png'
import installAgreement from '../../../public/images/lessons/setup-environment/install_agreement.png'
import install from '../../../public/images/lessons/setup-environment/install.png'
import installFinish from '../../../public/images/lessons/setup-environment/install_finish.png'
import vsDashboard from '../../../public/images/lessons/setup-environment/vs_dashboard.png'
import vsIcon from '../../../public/images/lessons/setup-environment/vs_icon.png'
import lts from '../../../public/images/lessons/setup-environment/lts.png'
import nodeFinish from '../../../public/images/lessons/setup-environment/node_finish.png'
import nodeInstall from '../../../public/images/lessons/setup-environment/node_install.png'
import nodeTerminal from '../../../public/images/lessons/setup-environment/node_terminal.png'
import node from '../../../public/images/lessons/setup-environment/node.png'
import hardhat from '../../../public/images/lessons/setup-environment/hardhat.png'
import packageImg from '../../../public/images/lessons/setup-environment/package.png'
import hardhatLogo from '../../../public/images/lessons/setup-environment/hardhat_logo.jpeg'
import nodeLogo from '../../../public/images/lessons/setup-environment/node_logo.png'
import ImageBlock from "../../app/content-blocks/ImageBlock";
import LinkBlock from "../../app/content-blocks/LinkBlock";
import Bold from "../../app/content-blocks/Bold";




const ContentSlides = () => {
  let slides = new Slides(5);

  slides.getSlide(0).addCard(
    <SlideContent>
      <HeaderBlock>Setup your development environment</HeaderBlock>
      <TextBlock>
        This lesson will guide you in setting up your Web3 development
        environment. You&apos;ll learn to:
      </TextBlock>
      <ListBlock>
        <li>Install Visual Studio Code</li>
        <li>Set up a Node.js environment</li>
        <li>Set up Hardhat for a new project</li>
      </ListBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>Install Visual Studio Code</HeaderBlock>
      <ImageBlock image={vscodedev}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>What is Visual Studio Code?</SubHeaderBlock>
      <TextBlock>
        Visual Studio Code, popularly known as VSCode is an open-source
        Integrated Development Environment (IDE) for writing programming source
        code.{" "}
      </TextBlock>

      <TextBlock>
        It was developed by Microsoft in 2015 and it runs on Windows, macOS, and
        Linux operating systems.
      </TextBlock>

      <TextBlock>
        We&apos;ll make use of the Visual Studio Code IDE to write our smart
        contracts.
      </TextBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>Install Visual Studio Code</SubHeaderBlock>
      <TextBlock>
      Setting up Visual Studio Code is quite easy. Follow the steps below to install Visual Studio Code on your computer:
      </TextBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 1 - Visit the Visual Studio Code official website, <LinkBlock link="https://code.visualstudio.com/">click here:</LinkBlock>
      </SubHeaderBlock>
      <ImageBlock image={install}></ImageBlock>

    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 2 - Download the Visual Studio Code installer for Your Operating System:
      </SubHeaderBlock>
      <ImageBlock image={download}></ImageBlock>

    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 3 - Run the downloaded Visual Studio Code installer:
      </SubHeaderBlock>
      <TextBlock>
      Run the downloaded installer <Bold>`VSCodeUserSetup-{"{version}"}.exe`</Bold> and accept the *license agreement*, then click the &quot;Next&quot; button to continue.

The setup wizard will guide you through other installations. This installation only takes a minute to complete.
      </TextBlock>
      <ImageBlock image={installAgreement}></ImageBlock>

    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 4 - Launch Visual Studio Code:
      </SubHeaderBlock>
      <TextBlock>
      After successfully installing Visual Studio code on your computer, check the &quot;Launch Visual Studio Code&quot;, and click on the &quot;Finish&quot; button.
      </TextBlock>
      <ImageBlock image={installFinish}></ImageBlock>
      <TextBlock>Or, search for &quot;Visual Studio Code&quot; on your computer and launch it:</TextBlock>
      <ImageBlock image={vsIcon}></ImageBlock>
    </SlideContent>
  );



  slides.getSlide(1).addCard(
    <SlideContent>
      <TextBlock>
      Your Visual Studio Code should look something like this when launched:</TextBlock>
      <ImageBlock image={vsDashboard}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <HeaderBlock>
      Setting Up a Node.js Environment</HeaderBlock>
      <ImageBlock image={nodeLogo}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>
      What is Node.js? </SubHeaderBlock>
      <TextBlock>Node.js or NodeJS is an open-source server development platform for running JavaScript outside of the browser. It is a JavaScript runtime environment that is built on Chrome&apos;s V8 JavaScript engine.</TextBlock>
      <TextBlock>NodeJS runs on several operating systems such as Windows, macOS, Linux, Unix operating systems, etc.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Setting Up a Node.js Environment </SubHeaderBlock>
      <TextBlock>Follow the steps below to install Node.js on your computer:</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 1 - Visit the Node.js official website, <LinkBlock link="https://nodejs.org/">click here:</LinkBlock></SubHeaderBlock>
      <ImageBlock image={node}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 2 - Download the LTS Node.js Version:</SubHeaderBlock>
      <TextBlock>LTS is an acronym for Long-Term Support. LTS versions will be supported and maintained by the Node.js team for an extended period of time.</TextBlock>
      <ImageBlock image={lts}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 3 - Run the Node.js Installer:</SubHeaderBlock>
      <TextBlock>Depending on the Node.js version and operating system version you downloaded, launch the downloaded installer (node-v16.15.0.pkg for macOS, node-v16.15.0.msi for Windows).</TextBlock>
      <TextBlock>Complete all the six installation steps, your installation might look different depending on your operating system.</TextBlock>
      <ImageBlock image={nodeInstall}></ImageBlock>
      <TextBlock>You’ll be notified once installed as shown below:</TextBlock>
      <ImageBlock image={nodeFinish}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
            <SubHeaderBlock>
            Step 4 - Verify Node.js Installation</SubHeaderBlock>
      <TextBlock>Open your terminal on your Vscode by pressing ctrl + ` and enter the command below to confirm if Node.js has been successfully installed on your computer:</TextBlock>
      <TextBlock><Bold>node -v</Bold></TextBlock>
      <TextBlock>or</TextBlock>
      <TextBlock><Bold>node -- version</Bold></TextBlock>
      <ImageBlock image={nodeTerminal}></ImageBlock>
      <TextBlock>If you encounter an error that ‘node is not recognized as an internal or external command’, that means Node.js is not installed on your system.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
            <HeaderBlock>
            Installing Hardhat</HeaderBlock>
            <ImageBlock image={hardhatLogo}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
            <SubHeaderBlock>
            What is Hardhat?</SubHeaderBlock>
      <TextBlock>Hardhat is an Ethereum development environment created by the Nomi Foundation. Hardhat is used to compile, run and test smart contracts on a development network.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
            <SubHeaderBlock>
            Creating a New Hardhat Project </SubHeaderBlock>
      <TextBlock>Follow the steps below to setup Hardhat for a new project:</TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
            <SubHeaderBlock>
            Step 1 - Setting Up a Node Development Environment</SubHeaderBlock>
      <TextBlock>In order to start using Hardhat, we need to set up a new Node project because Hardhat runs on the JavaScript runtime environment.</TextBlock>
      <TextBlock>First, create a folder named hello_world from your terminal with the command below:</TextBlock>
      <TextBlock><Bold>mkdir hellow_world</Bold></TextBlock>
      <TextBlock>Next, navigate into the hello_world folder with the command below:</TextBlock>
      <TextBlock><Bold>cd hello_world</Bold></TextBlock>
      <TextBlock>Initialize a new package.json file:</TextBlock>
      <TextBlock><Bold>npm init -y</Bold></TextBlock>
      <TextBlock>The command above will create a new `package.json file with the code below:</TextBlock>
      <ImageBlock image={packageImg}></ImageBlock>
      <TextBlock>The Package.json file will contain all the packages that are required in our Node.js application.</TextBlock>
      <TextBlock>NPM is a Node Package Manager that provides JavaScript packages for download and uses in a Node.js project. </TextBlock>

    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
            <SubHeaderBlock>
            Step 2 - Installing Hardhat </SubHeaderBlock>
      <TextBlock>Lastly, install Hardhat in your project with the command below:</TextBlock>
      <TextBlock><Bold>npm install --save-dev hardhat</Bold></TextBlock>
      <ImageBlock image={hardhat}></ImageBlock>

    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <HeaderBlock>You’ve completed this lesson.</HeaderBlock>
      <TextBlock>Well done</TextBlock>
    </SlideContent>
  );









  return slides;
};



export default ContentSlides;
