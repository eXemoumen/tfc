import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import Styles from "./AboutUs.module.css";

export const AboutUsSection = () => {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ];

  return (
    <>
      <section className={Styles.sec} style={{}}>
        <div style={{textAlign: 'left', marginTop: '-50px'}}>
          <p style={{color: 'white', fontFamily: 'Roboto'}}> More About Us</p>
          <h1 > Some Picturs of Members Work </h1>
        </div>
        <div className={Styles.carousel}>
          <Carousel
            cards={cards}
            height="200px"
            width="200px"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      </section>
    </>
  )
}