import type { GetServerSideProps, NextPage } from "next";
import Meta from "../../../../../../components/header/meta"
import Lesson from "../../../../../../components/app/lesson/Lesson";
import { getSession } from "next-auth/react";
import SetupEnvironment from "../../../../../../components/lessons/web3-development/SetupEnvironment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Index: NextPage = (props: any) => {

  const router = useRouter()
  const { pid }:any = router.query

  const slides = SetupEnvironment()

  const [currentSlide, setCurrentSlide] = useState<any>(0);

  useEffect(() => {
    (parseInt(pid) < slides.getTotalSlides()) ? setCurrentSlide(pid) : setCurrentSlide(0)
  }, [pid, slides])
  
  return (<>
    <Meta title="PolyPortal - Setup Environment"></Meta>
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

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/check-guild`, {
    method: "POST",
    body: JSON.stringify({ accessToken: session.accessToken }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
  const data = await res.json()

  if (data.message == "false") {
    return {
      redirect: {
        destination: "/login/discord",
        permanent: false,
      },
    };
  }
  

  return {
    props: { session },
  };
};

export default Index;