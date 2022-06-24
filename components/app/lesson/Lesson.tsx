import { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";
import mixpanel from "mixpanel-browser";
import { useSession } from "next-auth/react";
import DisplaySlides from "./DisplaySlides";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import cross from "../../../public/images/icons/cross.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Lesson = (props: any) => {
  const router = useRouter();

  const { data: session } = useSession();
  const [startedLesson,setStartedLesson] = useState(false)
  const [endedLesson,setEndedLesson] = useState(false)

  mixpanel.init(`${process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID}`, {
    debug: false,
  });
  if (session) {
    mixpanel.identify(`${session.id}`);
  }

  useEffect(() => {
    if(!startedLesson && parseInt(props.currentSlide) === 1) {
      setStartedLesson(true)
      mixpanel.track("Start Lesson", {
        Lesson: props.slides.getTitle(),
      });
    }
  }, [startedLesson, props.slides, props.currentSlide]);

  useEffect(() => {
    if (props.currentSlide == props.slides.getTotalSlides()-1) {
      if(!endedLesson) {
        setEndedLesson(true)
        mixpanel.track("End Lesson", {
          Lesson: props.slides.getTitle(),
        });
      }
    }
  }, [props.slides, props.currentSlide, endedLesson]);


  const nextSlide = () => {
    // props.setCurrentSlide((prevCurrentSlide:number) => prevCurrentSlide < props.slides.getTotalSlides()-1 ? prevCurrentSlide +1 : props.slides.getTotalSlides()-1);

    props.currentSlide < props.slides.getTotalSlides() - 1
      ? router.push(
          {
            pathname: "[pid]",
            query: { pid: parseInt(props.currentSlide) + 1 },
          },
          undefined,
          { shallow: true }
        )
      : router.push(
          {
            pathname: "[pid]",
            query: { pid: props.slides.getTotalSlides() - 1 },
          },
          undefined,
          { shallow: true }
        );
  };

  const previousSlide = () => {
    props.currentSlide > 0
      ? router.push(
          {
            pathname: "[pid]",
            query: { pid: parseInt(props.currentSlide) - 1 },
          },
          undefined,
          { shallow: true }
        )
      : router.push(
          {
            pathname: "[pid]",
            query: { pid: 0 },
          },
          undefined,
          { shallow: true }
        );
  };

  let percentageDone =
    (parseInt(props.currentSlide) / (props.slides.getTotalSlides() - 1)) * 100;

  return (
    <div>
      <div className="grid grid-cols-3 h-20 w-full fixed top-0 bg-white z-50 drop-shadow-[0_0_15px_rgb(0,0,0,0.1)]">
        <Link href={props.redirect} passHref>
          <button className="my-auto w-7 h-8 md:ml-7 ml-3">
            <Image src={cross} height={32} width={32} alt="" />
          </button>
        </Link>
        <ProgressBar
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          percentageDone={percentageDone}
        ></ProgressBar>
      </div>
      <AppContent>
        <div className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto">
          <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            key={props.currentSlide}
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
                transition: { duration: 1 }
              },
            }}
          >
            <DisplaySlides
              slide={props.slides.getSlide(props.currentSlide)}
              totalSlides={props.slides.getTotalSlides()}
              nextSlide={nextSlide}
              currentSlide={props.currentSlide}
              redirect={props.redirect}
            ></DisplaySlides>
          </motion.div>
        </div>
      </AppContent>
    </div>
  );
};

export default Lesson;

const AppContent = styled.div`
  position: fixed;
  top: 80px;
  width: 100%;
  height: calc(100% - 80px);
  overflow-y: scroll;
  background-color: #fdfdff;
`;
