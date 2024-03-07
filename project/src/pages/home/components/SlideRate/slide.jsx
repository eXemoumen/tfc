import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Style from "./component.module.css"

import { useState } from "react";
import { useRef } from "react";

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };
//   return (
//     <div className='w-3/4 m-auto'>
//       <div className="mt-20">
//       <Slider {...settings}>
//         {data.map((d) => (
//           <div key={d.name} className="bg-white h-[1050px] text-black rounded-xl">
//             <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
//               <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
//             </div>

//             <div className="flex flex-col items-center justify-center gap-4 p-4">
//               <p className="text-xl font-semibold">{d.name}</p>
//               <p className="text-center">{d.review}</p>
//               <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       </div>
      
//     </div>
//   );
// }


function SlideRate() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "white",
          borderRadius:"50%",
        }}
      >
      </div>)
  };
  return (
    <div className={Style.slider}>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

const data = [
  {
    name: `mounri`,
    str: `/students/John_Morgan.jpg`,
    asd: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `mounri`,
    str: `/students/John_Morgan.jpg`,
    asd: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `mounri`,
    str: `/students/John_Morgan.jpg`,
    asd: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `mounri`,
    str: `/students/John_Morgan.jpg`,
    asd: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `mounri`,
    str: `/students/John_Morgan.jpg`,
    asd: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
 
  
];

export default SlideRate;
