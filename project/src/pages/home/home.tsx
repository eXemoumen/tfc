import { Link } from "react-router-dom";
import Navbar from "../../components/navBar/navBar";
import Style from "./page.module.css";
import { useRef, useState, useEffect } from "react";
import SlideRate from "./components/SlideRate/slide";
import { Carousel } from "./components/carousel/carousell";
import RateCard from "./components/rateCard/rateCard";
import { AboutUsSection } from "./aboutUs/AboutSection";
import { FooterSection } from "./footer/FooterSection";
import Logo from "../../components/logo/logo";
import Event from "../events/Event";

export default function Home() {
  const [slideperone, setslideperone] = useState(0);
  const sliderRef = useRef(null);

  const handleprev = () => {
    if (slideperone == -50) setslideperone((prev) => prev + 50);
  };
  const handlenext = () => {
    if (slideperone == 0) setslideperone((prev) => prev - 50);
  };
  return (
    <>
      <div className="max-w-full w-full px-15">
        <section className="my-10">
          <div className="relative">
            <h5 className="absolute top-0 left-0.5 font-[Abel] font-normal text-sm">
              Welcome To TFC
            </h5>
            <h1 className="font-[Roboto] text-8xl font-bold mx-auto">
              Make Yourself Great Again
            </h1>
          </div>
          <h2 className="font-[Roboto] text-3xl font-normal leading-11 text-center my-5">
            Developemnt,Design Marketing-Despline <br />
            Skillful Work.
          </h2>
          <div className="flex items-center justify-center">
            <div>
              <p className="text-right font-[Rubik] font-normal leading-10 text-base">
                رد بالك !! مواقع تواصل قنعوك بلي تقدر ولازم تعيش وحدك. وين فالصح
                العزلة خطيرة علينا
                <br />
                كامل، لازم تكون فجماعة وين واحد ينافسك ويدعمك وين ميخليكش تحبس
                الخدمة وديما يعاونك <br />
                بش متقعدش فنفس البلاصة... وعلابيها راكم هنا اليوم.
              </p>
              <div className="flex gap-3.75 mt-20 mx-40">
                <Link
                  className="bg-white text-black px-5 py-2.5 rounded-full shadow-none transition-all duration-300"
                  to={"/challenge"}
                >
                  Join Challenge Now
                </Link>
                <Link
                  className="bg-white text-black px-5 py-2.5 rounded-full shadow-none transition-all duration-300"
                  to={"/about"}
                >
                  Discover TFC
                </Link>
              </div>
            </div>
            <div className="mt-[-25px]">
              <Logo size={280} />
            </div>
          </div>
        </section>
        <section>
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col justify-between text-left">
              <h1 className="font-[Roboto] text-4xl font-normal">
                Our Members Opinions
              </h1>
              <h2 className="font-[Roboto] text-2.5xl font-normal">
                Don’t take our word for it. Trust our customers
              </h2>
            </div>
            <div className="flex gap-2.5">
              <span
                onClick={handleprev}
                className={`flex justify-center items-center gap-2.5 px-5 py-5 rounded transition-all duration-200 ${
                  slideperone == 0 ? "opacity-50" : "opacity-100"
                }`}
                onClick={handleprev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  fill="none"
                  viewBox="0 0 8 12"
                >
                  <path
                    fill="#fff"
                    d="M7.41 1.41L2.83 6l4.58 4.59L6 12 0 6l6-6 1.41 1.41z"
                  ></path>
                </svg>
                <span className="hidden sm:block">Previous</span>
              </span>
              <span
                onClick={handlenext}
                className={`flex justify-center items-center gap-2.5 px-5 py-5 rounded transition-all duration-200 ${
                  slideperone == -50 ? "opacity-50" : "opacity-100"
                }`}
              >
                <span className="hidden sm:block">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  fill="none"
                  viewBox="0 0 8 12"
                >
                  <path
                    fill="#fff"
                    d="M.59 10.59L5.17 6 .59 1.41 2 0l6 6-6 6-1.41-1.41z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className={Style.SlideRate} ref={sliderRef}>
            <div
              className={Style.slider}
              style={{
                translate: `${slideperone}%`,
              }}
              ref={sliderRef}
            >
              {/* <div className={Style.slideone}> */}
              <RateCard
                rate="5"
                message={"SUCH A GREAT COMMUNITY "}
                name={"mounir hamed"}
              ></RateCard>
              <RateCard
                rate="4.5"
                message={"tfc afdal haja sratli f had l3am"}
                name={"hasan adbalh"}
              ></RateCard>
              <RateCard
                rate="5"
                message={
                  "tfc is the palce that made me better and displine i meet a great people there ,proud of being a member"
                }
                name={"lina  elgoubary"}
              ></RateCard>
              {/* </div> */}
              {/* <div className={Style.slidetwo}> */}
              <RateCard
                rate="5"
                message={"who didnt jion tfc yet rahou irati "}
                name={"mohamed"}
              ></RateCard>
              <RateCard
                rate="5"
                message={"jioning tfc is worthed"}
                name={"afaf"}
              ></RateCard>
              <RateCard
                rate="5"
                message={"just amazing"}
                name={"zakaria hamed"}
              ></RateCard>
              {/* </div> */}
            </div>
          </div>
          <div className={Style.sliderBalls}>
            {" "}
            <span
              onClick={handleprev}
              style={{
                opacity: slideperone == -50 ? 0.1 : 1,
              }}
            ></span>
            <span
              onClick={handlenext}
              style={{
                opacity: slideperone == 0 ? 0.1 : 1,
              }}
            ></span>{" "}
          </div>

          {/* <SlideRate></SlideRate> */}
        </section>

        <AboutUsSection />
        <Event />
        <FooterSection />
      </div>
    </>
  );
}
