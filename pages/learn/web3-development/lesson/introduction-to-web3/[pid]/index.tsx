import type { GetServerSideProps, NextPage } from "next";
import Meta from "../../../../../../components/header/meta"
import Lesson from "../../../../../../components/app/lesson/Lesson";
import { getSession } from "next-auth/react";
import Web3Development_1 from "../../../../../../components/lessons/web3-development/Web3Development_1";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Index: NextPage = (props: any) => {

  const router = useRouter()
  const { pid }:any = router.query

  const slides = Web3Development_1()

  const [currentSlide, setCurrentSlide] = useState<any>(0);

  useEffect(() => {
    (parseInt(pid) < slides.getTotalSlides()) ? setCurrentSlide(pid) : setCurrentSlide(0)
  }, [pid, slides])
  
  return (<>
    <Meta title="PolyPortal - Introduction to Web3"></Meta>
    <Lesson slides={slides} redirect="/learn/web3-development/" currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}></Lesson>
    </>
  );
};




export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Index;