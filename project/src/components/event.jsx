import Countdown from "react-countdown";
import { useState } from "react";

const EventContdown = () => {
  return (
    <>
      <Countdown
        date={Date.now() + 294076000}
        calc
        className="h-32 w-auto font-mono text-center  m-7 sm:text-5xl md:text-7xl lg:text-9xl sm:m-0 md:m-3 lg:m-5"
      />
      <h2 className="h-32 w-auto font-mono text-center  m-6 sm:text-xl,m-0 md:text-1xl lg:text-4xl">
        متضيعش هذي الفرصة
      </h2>
    </>
  );
};

const EventMain = () => {
  return (
    <>
      <div>
        <h1>المشكل يرجع فرصة</h1>
        <p>
          راح نعاونك تقضي على سبب فشلك في بداية مشروعك. كيما تمنيت يعاونوني كي
          بديت أنا قبل 5 سنوات. أسباب فشلك هوما :المحيط. الخبرة و راس المال.
          ولكن يجمعهم مشكل واحد. التواصل بمثال أوضح. كي تجي لحدث 9 مارس. راح
          تلقا المحيط لي يعاونك باش تخدم. وتلقا اصحاب مشاريع و خبراء يعاونوك تحل
          مشاكلك وهذا راح يوفر عليك المصاريف. واذا قدرت تتواصل معاهم صح. وكانت
          عندك قيمة إضافية. راح تخلق فرص لروحك باش تخدم مشروعك. استمارة التسجيل
          راح تكون بالثلاثاء. وكلما تشارك الفديو كلما تستفاد. وماتخلي حتى واحد
          يحبسك في رمضان هذا
        </p>

        <p>9 mars 2024</p>
        <p>USTHB</p>
      </div>
    </>
  );
};

export default function Event() {
  const [showOldComponent, setShowOldComponent] = useState(true);
  const [block, setclassName] = useState(
    "block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 w-48"
  );

  const handleButtonClick = () => {
    setShowOldComponent(false);
    setclassName(
      "hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 w-48"
    );
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center align-middle flex-col dark">
        {showOldComponent ? <EventContdown /> : <EventMain />}
        <div className=" flex justify-center align-middle">
          <button className={block} onClick={handleButtonClick}>
            اضغط لعرض المزيد
          </button>
        </div>
      </div>
    </>
  );
}
