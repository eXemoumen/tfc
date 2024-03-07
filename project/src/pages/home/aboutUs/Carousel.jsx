import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0); // Start from the first slide
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide(prevSlide => (prevSlide + 1) % cards.length); // Loop back to start when it reaches the end
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [cards.length]);
  
  return (
    <div style={{ width: props.width, height: props.height, margin: props.margin }}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
