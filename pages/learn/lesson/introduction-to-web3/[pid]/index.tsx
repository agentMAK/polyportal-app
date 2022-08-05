import type { GetServerSideProps, NextPage } from "next";
import Meta from "../../../../../components/header/meta"
import Lesson from "../../../../../components/app/lesson/Lesson";
import IntroToWeb3 from "../../../../../components/lessons/web3/IntroToWeb3";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Index: NextPage = (props: any) => {

  const router = useRouter()
  const { pid }:any = router.query

  const slides = IntroToWeb3()

  const [currentSlide, setCurrentSlide] = useState<any>(0);

  useEffect(() => {
    (parseInt(pid) < slides.getTotalSlides()) ? setCurrentSlide(pid) : setCurrentSlide(0)
  }, [pid, slides])
  
  return (<>
    <Meta title="PolyPortal - Introduction to Web3"></Meta>
    <Lesson slides={slides} redirect="/learn" currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}></Lesson>
    </>
  );
};




// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// };

export default Index;