import { Link } from "react-router-dom"
import Navbar from "../../components/navBar/navBar"
import Style from "./page.module.css"
import { useRef, useState, useEffect } from "react"
import SlideRate from "./components/SlideRate/slide"
import { Carousel } from "./components/carousel/carousell"
import RateCard from "./components/rateCard/rateCard"
import { AboutUsSection } from "./aboutUs/AboutSection"
import { FooterSection } from "./footer/FooterSection"
import Logo from './../../components/logo/logo';

export default function Home() {

  const [slideperone, setslideperone] = useState(0)
  const sliderRef = useRef(null);

  const handleprev = () => {
    if (slideperone == -50) setslideperone(prev => prev + 50)
  };
  const handlenext = () => {
    if (slideperone == 0) setslideperone(prev => prev - 50)
  };
  return (
    <>
      <div className={Style.page}>
        <section className={Style.hero}>
          <div style={{position: 'relative'}}>
            <h5>Welcome To TFC</h5>
            <h1>Make Yourself Great Again</h1>
          </div>
          <h2>
            Developemnt,Design Marketing-Despline <br />Skillful Work.
          </h2>
          <div className={Style.wsmo} >
            <div  className={Style.wsmo2} >
              <p style={{fontSize: '1em'}}>
                رد بالك !! مواقع تواصل قنعوك بلي تقدر ولازم تعيش وحدك. وين فالصح العزلة خطيرة علينا<br />
                كامل، لازم تكون فجماعة وين واحد ينافسك ويدعمك وين ميخليكش تحبس الخدمة وديما يعاونك <br />
                بش متقعدش فنفس البلاصة... وعلابيها راكم هنا اليوم.
              </p>
              <div className={Style.Links}   >
                <Link className={Style.Link} to={'/challenge'}>Join Challenfe Now</Link>
                <Link className={Style.Link} to={'/about'}>Discover TFC</Link>
              </div>
            </div>
            <div style={{marginTop: '-100px'}}>
              <Logo size={280} />
            </div>
          </div>
        </section>
        <section className={Style.rate}>
          <div className={Style.rate__header}>
            <div className={Style.header}>
              <h1>Our Members Opinions </h1>
              <h2>Don’t take our word for it. Trust our customers</h2>
            </div>
            <div className={Style.handle}>
              <span onClick={handleprev}
                style={{
                  opacity: slideperone == 0 ? .5 : 1
                }}
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
                <span className={Style.fre}>
                Previous 
                </span>

              </span>
              <span onClick={handlenext}
                style={{
                  opacity: slideperone == -50 ? .5 : 1
                }}
              >                <span className={Style.fre}>
                Next
                </span >

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
            <div className={Style.slider}
              style={{
                translate: `${slideperone}%`
              }}
              ref={sliderRef}>
              {/* <div className={Style.slideone}> */}
                <RateCard rate="2" message={'i want to saygk, sh'} name={'Mounir'}></RateCard>
                <RateCard rate="5" message={'بيبسيسبك شبسيك كبشككبشككبشككبشككبشككبشككبشككبشككبشككبشككببشككبشككبشك كشبسب '} name={'Mounir'}></RateCard>
                <RateCard rate="1" message={'i want to sjghay sh'} name={'Mounir'}></RateCard>
              {/* </div> */}
              {/* <div className={Style.slidetwo}> */}
                <RateCard rate="1" message={'i want to say sh'} name={'Mounir'}></RateCard>
                <RateCard rate="1" message={'i want to say sh'} name={'Mounir'}></RateCard>
                <RateCard rate="1" message={'i want to say sh'} name={'Mounir'}></RateCard>
              {/* </div> */}
            </div>
          </div>
          <div className={Style.sliderBalls}> <span onClick={handleprev}
            style={{
              opacity: slideperone == -50 ? .1 : 1
            }}
          ></span>
            <span onClick={handlenext}
              style={{
                opacity: slideperone == 0 ? .1 : 1
              }}
            ></span>  </div>

          {/* <SlideRate></SlideRate> */}
        </section>
    

        <AboutUsSection />
        <FooterSection />
      </div>
    </>

  )
}