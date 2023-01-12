import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Subtitle from "./Subtitle";
import image1 from "../image1.jpeg";
import image2 from "../image2.jpeg";
import image3 from "../image3.jpeg";
import image4 from "../image4.jpeg";

const bogliasco = `${image1}`;
const countyClare = `${image2}`;
const craterRock = `${image3}`;
const giauPass = `${image4}`;

export default function BasicSlider() {
  return (
    <HeroSlider
      className="heroSlider"
      height={"80vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>FIN Investments Inc.</Title>
          <Subtitle>
            THE DECISIONS WE MAKE TODAY IMPACT TOMORROW.(TO BE CHANGED)
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Image 1"
        background={{
          backgroundImageSrc: giauPass,
        }}
      />

      <Slide
        shouldRenderMask
        label="Image 2"
        background={{
          backgroundImageSrc: bogliasco,
        }}
      />

      <Slide
        shouldRenderMask
        label="Image 3"
        background={{
          backgroundImageSrc: countyClare,
        }}
      />

      <Slide
        shouldRenderMask
        label="Image 4"
        background={{
          backgroundImageSrc: craterRock,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
