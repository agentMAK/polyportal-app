import { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";
import mixpanel from 'mixpanel-browser';
import { useSession } from "next-auth/react";
import DisplaySlides from "./DisplaySlides";
import styled from "@emotion/styled";
import { useRouter } from 'next/router'

const Lesson = (props: any) => {
  const router = useRouter()

  const { data: session } = useSession()

  mixpanel.init(`${process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID}`, {debug: false});
  if(session) {
    mixpanel.identify(`${session.id}`);
  }

  useEffect(() => {
    mixpanel.track('Start Lesson', {"Lesson": "Introduction to Web3", "Course":"Web3 Development"});
  },[]);

  const nextSlide = () => {
    // props.setCurrentSlide((prevCurrentSlide:number) => prevCurrentSlide < props.slides.getTotalSlides()-1 ? prevCurrentSlide +1 : props.slides.getTotalSlides()-1);

    props.currentSlide < props.slides.getTotalSlides()-1 ? router.push({
      pathname: '[pid]',
      query: { pid: parseInt(props.currentSlide) +1 },
    }, undefined, { shallow: true }) : router.push({
      pathname: '[pid]',
      query: { pid: props.slides.getTotalSlides()-1 },
    }, undefined, { shallow: true });

    if(props.currentSlide == props.slides.getTotalSlides()) {
      mixpanel.track('End Lesson', {"Lesson": "Introduction to Web3", "Course":"Web3 Development"});
    }
  };

  const previousSlide = () => {
    props.currentSlide > 0 ? router.push({
      pathname: '[pid]',
      query: { pid: parseInt(props.currentSlide) -1 },
    }, undefined, { shallow: true }): router.push({
      pathname: '[pid]',
      query: { pid: 0 },
    }, undefined, { shallow: true });
  };

  let percentageDone = (parseInt(props.currentSlide) +1)/(props.slides.getTotalSlides())*100

  return (
    <div>
      <div className='flex flex-row justify-center content-end h-20 w-full border-b-4 fixed top-0 bg-white z-50'>
        <ProgressBar nextSlide={nextSlide} previousSlide={previousSlide} percentageDone={percentageDone}></ProgressBar>
      </div>
      <AppContent>
        <div className="max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
          <DisplaySlides slide={props.slides.getSlide(props.currentSlide)} totalSlides={props.slides.getTotalSlides()} nextSlide={nextSlide} currentSlide={props.currentSlide} redirect={props.redirect}></DisplaySlides>
        </div>
      </AppContent>
    </div>
  );
};

export default Lesson;

const AppContent = styled.div`
  position:fixed;
  top:80px;
  width: 100%;
  height: calc(100% - 80px);
  overflow-y:scroll;
  background-color:#F9F8FF
`