function About() {
  return (
    <div className="flex flex-col md:flex-row p-10">
      <div className="text text-right leading-9 flex flex-col justify-center md:flex md:flex-col md:justify-center md:tex">
        <span className=" font-bold text-4xl h-16">:TFC تعريف</span>
        <p className="ta3rif">
          مجموعة متحدة بالإنضباط، مدفوعة بالطموح. نحن مجتمع من الأفراد ذوي
          العزيمة القوية، حيث يمتلك كل فرد مهارة فريدة تسهم في نجاحنا الجماعي.
          مهمتنا واحدة: تحقيق الحرية المالية من خلال الأعمال الداخلية والوصول
          لنمط حياة غني ومتطور
        </p>
        <span className="font-bold text-4xl h-16">:مهمتنا</span>
        <p className="mohima">
          العزلة عدو كل قبطان يريد تطوير حياته، فإن هذا النادي لأن يوفر له الجو
          الجماعي الملائم ليتعاون مع من هم بنفس عقليته على التركيز في طريق العمل
          وتحقيق أهدافهم معًا مع طريق تبادل الخبرات والمنافع
        </p>
        <span className="font-bold text-4xl h-16">:القواعد والقيم</span>
        <p className="gawa3id">
          يجب على كل الأعضاء إحترام القوانين العامة للمجموعة أهمها القبطان يدعم
          خوه:على كل فرد دعم زميله في حالة إحتياجه له حسب إستطاعته المسؤولية
          العامة:على كل عضو تحمل مسؤولية نجاح المجموعة بالمساهمة، مهما كانت
          أقدميته أنفع قبل ما تنتفع:على كل فرد أن ينضم بنية تبادل النفع وليس
          بالإستغلال فقط. إضافة قيمة للمجموعة إجباري
        </p>
        <span className="font-bold text-4xl h-16">:تقييم الأداء</span>
        <p className="adaa">
          يتم تقييم أداء الأعضاء بحسب إلتزامهم بقواعد وقيم المجموعة، ويكون هذا
          بشكل أسبوعي. في حال عدم تحسن أداء فرد بعد تدهوره. يتم إقصاؤه ويتوجب
          عليه إعادة التحدي من جديد
        </p>
        <span className="font-bold text-4xl h-16">:الفرص المقدمة</span>
        <p className="foras mb-5">
          يتم تقديم فرص للأعضاء الذين يثبتون أنفسهم في التعلم والعمل ومساعدة
          باقي الفريق بما يستطيعون تقديمه. وهذا حتى يواصلوا طريقهم فيما يقومون
          به. تتمثل هذه الفرص في أي شيء يسهم في دعم هذا القبطان
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center  ">
        <img className="m-auto" src="/src/assets/logo.png" alt="" />
      </div>
    </div>
  );
}

export default About;
