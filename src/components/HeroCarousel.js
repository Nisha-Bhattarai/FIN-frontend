import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Subtitle from "./Subtitle";

const bogliasco =
  "https://www.etfstream.com/media/26054/shutterstock_2145730911.jpg?anchor=center&mode=crop&width=876&height=438&rnd=133135869990000000";
const countyClare =
  "https://www.bond.org.uk/wp-content/uploads/2022/06/1338015694-1296x400.png";
const craterRock = "https://gbot.si/_nuxt/img/gbot_landing.841f42b.jpg";
const giauPass =
  "https://t4.ftcdn.net/jpg/02/00/68/69/360_F_200686968_KS9NVTJgvjMQs2FniVHyIJaAIcg5p7D0.jpg";

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
          <Subtitle>THE DECISIONS WE MAKE TODAY IMPACT TOMORROW.</Subtitle>
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
