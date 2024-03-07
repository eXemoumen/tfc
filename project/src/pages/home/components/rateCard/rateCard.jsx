import { Link } from "react-router-dom"
import Style from "./component.module.css"
import {useRef,useState, useEffect } from "react"

export default function RateCard({rate,message,name}) {

  const [stars, setStateLoading] = useState([1,2,3,4,5])

  return (
    <div  className={Style.card}>
      <div className={Style.stars}>

    {stars.map((a,i)=>{
      if (rate>=a) {
      return (<svg  key={i} xmlns="http://www.w3.org/2000/svg" width="21"  height="21"  fill="none" viewBox="0 0 21 19" >
      <path fill={rate>=1?"#fff":'#fff0'}   d="M10.5 15.27L16.68 19l-1.64-7.03 5.46-4.73-7.19-.61L10.5 0 7.69 6.63.5 7.24l5.46 4.73L4.32 19l6.18-3.73z" ></path>
      </svg>
      )
    }else{
      return(
        <svg key={i}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
    >
      <g clipPath="url(#clip0_413_528)">
        <path
          fill="#fff"
          d="M22.5 9.24l-7.19-.62L12.5 2 9.69 8.63l-7.19.61 5.46 4.73L6.32 21l6.18-3.73L18.68 21l-1.63-7.03 5.45-4.73zm-10 6.16l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38 1.7-4.03 1.71 4.04 4.38.38-3.32 2.88 1 4.28-3.77-2.28z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_413_528">
          <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.5)"></path>
        </clipPath>
      </defs>
    </svg>
      )

    }
    }
    )
    }
      </div>
   <h1 dir="auto">{name}</h1>
   <p dir="auto">{message}</p>
    </div>

  )
}