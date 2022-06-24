import TextBlock from "../../app/content-blocks/TextBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import ListBlock from "../../app/content-blocks/ListBlock";
import Slides from "../../app/slides/Slides";
import SubHeaderBlock from "../../app/content-blocks/SubHeaderBlock";
import ImageBlock from "../../app/content-blocks/ImageBlock";
import Bold from "../../app/content-blocks/Bold";
import Code from "../../app/content-blocks/Code";
import CodeBlock from "../../app/content-blocks/CodeBlock";
import sampleProject from '../../../public/images/lessons/deploy-hardhat/sampleProject.png'
import installEthers from '../../../public/images/lessons/deploy-hardhat/installEthers.png'
import projectCreated from '../../../public/images/lessons/deploy-hardhat/projectCreated.png'
import artifacts from '../../../public/images/lessons/deploy-hardhat/artifacts.png'
import compiled from '../../../public/images/lessons/deploy-hardhat/compiled.png'
import contracts from '../../../public/images/lessons/deploy-hardhat/contracts.png'
import greeterDeployed from '../../../public/images/lessons/deploy-hardhat/greeterDeployed.png'
import greeterSol from '../../../public/images/lessons/deploy-hardhat/greeterSol.png'
import hardhatConfig from '../../../public/images/lessons/deploy-hardhat/hardhatConfig.png'
import hardhatConfigFile from '../../../public/images/lessons/deploy-hardhat/hardhatConfigFile.png'
import noCompile from '../../../public/images/lessons/deploy-hardhat/noCompile.png'
import sampleScripts from '../../../public/images/lessons/deploy-hardhat/sampleScripts.png'
import sampleTest from '../../../public/images/lessons/deploy-hardhat/sampleTest.png'
import scripts from '../../../public/images/lessons/deploy-hardhat/scripts.png'
import test from '../../../public/images/lessons/deploy-hardhat/test.png'
import Italic from "../../app/content-blocks/Italic";


const ContentSlides = () => {
  let slides = new Slides(6);

  slides.getSlide(0).addCard(
    <SlideContent>
      <HeaderBlock>Build and Deploy Your First Contract Using Hardhat</HeaderBlock>
      <TextBlock>
      In this course, you’ll learn how to build and deploy your first smart contract with Hardhat. This course will cover:
      </TextBlock>
      <ListBlock>
        <li>How to setup a new Hardhat project</li> 
        <li>How to compile your smart contract with Hardhat</li>
        <li>How to deploy your smart contract with Hardhat</li>
      </ListBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>How to Set Up a New Hardhat Project</HeaderBlock>
      <TextBlock>
      Hardhat is an environment that developers use to test, compile, deploy and debug dApps based on the Ethereum blockchain.
      </TextBlock>
      
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 1 - To scaffold a new Hardhat project, run the command below in your <Code>hello_world</Code> terminal:
      </SubHeaderBlock>
      <CodeBlock>npx hardhat</CodeBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
       <SubHeaderBlock>
        Step 2 - Next, select the <Code>Create a basic sample project</Code> option from your terminal:
        </SubHeaderBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>Step 3 - Accept yes for all other questions and wait for the <Code>hardhat-waffle</Code> and <Code>hardhat-ethers</Code> dependencies to be installed:</SubHeaderBlock>
      <ImageBlock image={installEthers}></ImageBlock>
      <TextBlock>If you encounter an error during the installation, you can manually install the all the required dependencies with the command below:</TextBlock>
      <CodeBlock>npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers @openzeppelin/contracts</CodeBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>Successfully installed</SubHeaderBlock>
      <TextBlock>After a successful installation, you should see the following output in your terminal:</TextBlock>
      <ImageBlock image={projectCreated}></ImageBlock>
    </SlideContent>
  );




  slides.getSlide(2).addCard(
    <SlideContent>
      <HeaderBlock>What&apos;s Inside a Hardhat Project?</HeaderBlock>
      <TextBlock>
      After successfully creating a new Hardhat project, You&apos;ll notice that some folders and files have been created inside the <Code>hello_world</Code> project folder.
      </TextBlock>
      <TextBlock>We&apos;ll explore the folders and files created by hardhat in our project below.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>The <Code>contracts</Code> folder</SubHeaderBlock>
      <TextBlock>
        The contracts folder will contain the source code files of our smart contract:
      </TextBlock>
      <ImageBlock image={contracts}></ImageBlock>
      <TextBlock>Inside the <Code>contracts</Code> folder, there is a <Code>Greeter.sol</Code> file, which is a sample Solidity smart contract source code that returns a greeting sentence in the terminal when executed:</TextBlock>
      <ImageBlock image={greeterSol}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>The <Code>scripts</Code> folder</SubHeaderBlock>
      <TextBlock>
        This folder will contain script files to deploy and execute our smart contracts:
      </TextBlock>
      <ImageBlock image={scripts}></ImageBlock>
      <TextBlock>Inside the <Code>scripts</Code> folder, there is a <Code>sample-script.js</Code> file that contains a main function to deploy the Greeter smart contract:</TextBlock>
      <ImageBlock image={sampleScripts}></ImageBlock> 
      <TextBlock>In the code above:</TextBlock>
      <ListBlock>
      <li>The <Code>hardhat</Code> package is imported into our project on <Italic>line 6.</Italic></li>
      <li>Next, a <Code>main</Code> function is created on <Italic>line 8.</Italic></li>
      <li>Inside the <Code>main</Code>  function, on <Italic>line 17</Italic>, there’s a <Code>Greeter</Code>  variable that reference the <Code>Greeter</Code>  contract from the <Code>Greeter.sol</Code>  file.</li>
      <li>A <Code>greeter</Code> variable is then created to reference the deployment of the <Code>Greeter</Code> contract with a <Code>&quot;Hello, Hardhat!&quot;</Code> argument on <Italic>line 18</Italic>.</li>
      <li>On <Italic>line 20</Italic>, the <Code>greeter</Code> deployed method is invoked.</li>
      <li>On <Italic>line 22,</Italic> the deployed smart contract address is logged into the terminal.</li>
      <li>Lastly, the <Code>main</Code> function is invoked asynchronously.</li>
      </ListBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>The <Code>test</Code> folder</SubHeaderBlock>
      <TextBlock>
      The test folder will contain our project’s smart contract test files. Test files ensure that our smart contracts perform as expected when they are executed. 
      </TextBlock>
      <ImageBlock image={test}></ImageBlock>
      <TextBlock>Inside the <Code>test</Code> folder, there is a <Code>sample-test.js</Code> file that checks if the <Code>Greeter</Code> smart contract returns the right greeting sentence, the test will fail when the greeting sentence that is displayed in the terminal is different from the test expectation:</TextBlock>
      <ImageBlock image={sampleTest}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>The <Code>hardhat.config.js</Code> folder</SubHeaderBlock>
      <TextBlock>
      The <Code>hardhat.config.j</Code> file will be used to create tasks in our Hardhat projects:
      </TextBlock>
      <ImageBlock image={hardhatConfig}></ImageBlock>
      <TextBlock>A task is a JavaScript asynchronous function with metadata that will be used by Hardhat to automate some specific actions in our code:</TextBlock>
      <ImageBlock image={hardhatConfigFile}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <HeaderBlock>Compiling Your Smart Contract with Hardhat</HeaderBlock>
      <TextBlock>
      In this step, we’re going to compile our smart contract with the Hardhat&apos;s built-in <Code>compile</Code> task.
      </TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 1 - Run the command below to compile your smart contract:
      </SubHeaderBlock>
      <CodeBlock>npx hardhat compile</CodeBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 2 - Next, after compiling, you should see a success message output, like below:
      </SubHeaderBlock>
      <ImageBlock image={compiled}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 3 - After running the compile task, a new <Code>artifacts</Code> folder will be created, this is where all artifacts generated for all the compiled smart contracts will be stored.
      </SubHeaderBlock>
      <ImageBlock image={artifacts}></ImageBlock>
      <TextBlock>An <Bold>artifact</Bold> has all the information that is necessary to deploy and interact with the compiled smart contract.</TextBlock>
      <TextBlock>Hardhat will not compile if you run the compile task without making any changes to your smart contract:</TextBlock>
      <ImageBlock image={noCompile}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <HeaderBlock>Deploying Your Smart Contract With Hardhat</HeaderBlock>
      <TextBlock>
      In this step, we’re going to deploy our smart contract with the Hardhat’s built-in <Code>run</Code> task and the sample deploy script (<Code>sample-script.js</Code>).
      </TextBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Step 1 - Run the command below to deploy your smart contract:
      </SubHeaderBlock>
      <CodeBlock>npx hardhat run scripts/sample-script.js</CodeBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <SubHeaderBlock>
      Smart Contract Deployment Successful
      </SubHeaderBlock>
      <TextBlock>After a successful deployment, the deployed smart contract address will be displayed on your terminal, as shown below:
</TextBlock>
      <ImageBlock image={greeterDeployed}></ImageBlock>
    </SlideContent>
  );


  slides.getSlide(5).addCard(
    <SlideContent>
      <HeaderBlock>You’ve completed this lesson.</HeaderBlock>
      <TextBlock>Our next lesson will released in a couple of days. <br />In the meanwhile, follow us on <a href="https://twitter.com/PolyPortalHQ" className="underline">Twitter</a> to get noticed. 🐦</TextBlock>
    </SlideContent>
  );





  return slides;
};



export default ContentSlides;
