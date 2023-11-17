import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "../Deals/Deals.css";
import MenuList from "../../utils/MenuList.json";
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';

const Deals = () => {
  // Shuffle function to randomize array order
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const hasDeal = shuffleArray(MenuList.filter((menuItem) => menuItem.Deal === true));

  return (
    <section className="d-wrapper">
      <div className="d-container">
        <div className="d-head flexColStart">
          <span className="titleDeals">Deals</span>
        </div>
        <Swiper
          spaceBetween={80}
          breakpoints={{
            720: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          <SliderButtons />
          {hasDeal.map((card, i) => (
            <SwiperSlide key={i} className={`slide-${i}`}>
              <div className="flexColStart d-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText d-price">
                  <span style={{ color: "green" }}>$</span>
                  <span stlye={{ color: "white" }}>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Deals;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter d-buttons-container">
      <ArrowCircleLeftTwoToneIcon size="" onClick={() => swiper.slidePrev()}>&lt;</ArrowCircleLeftTwoToneIcon>
      <ArrowCircleRightTwoToneIcon className="muiArrow" onClick={() => swiper.slideNext()}>&gt;</ArrowCircleRightTwoToneIcon>
    </div>
  );
};
