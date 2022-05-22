import type { GetServerSideProps, NextPage } from "next";
import Meta from "../../../../../components/header/meta"
import Lesson from "../../../../../components/app/lesson/Lesson";
import { getSession } from "next-auth/react";
import Web3Development_1 from "../../../../../components/lessons/web3-development/Web3Development_1";

const index: NextPage = (props: any) => {
  return (<>
    <Meta title="PolyPortal - Introduction to Web3"></Meta>
    <Lesson slides={Web3Development_1()} redirect="/learn/web3-development/"></Lesson>
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

export default index;