import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
const speakItems = [
  {
    id: "1",
    text: "« hCoptcha c’est ma vie. Le matin je me réveille, je pense à hCoptcha. Le midi, je mange hCoptcha, aux toilettes, je hCoptcha le Captha. »",
    icon: "/images/icons/speak/1.png",
    name: "LyraRobotics",
    desc: "Wallet generator, NFT and Crypto exchanger",
  },
  {
    id: "2",
    text: "« hCoptcha m’aide à faire ma vaiselle et ma cuisine,grâceà hCoptcha je mange des Yaourts tous les jours »",
    icon: "/images/icons/speak/2.png",
    name: "DMDPie",
    desc: "The ultimate tool for Discord Management",
  },
  {
    id: "3",
    text: "« Ma Maman m’avait reniée quand j’étais petit, et le jour où je lui ait dit que j’avais acheté hCoptcha, elle m’a dérenié »",
    icon: "/images/icons/speak/3.png",
    name: "SurDM",
    desc: "Discord Marketing services",
  },
  {
    id: "4",
    text: "« Ma Maman m’avait reniée quand j’étais petit, et le jour où je lui ait dit que j’avais acheté hCoptcha, elle m’a dérenié »",
    icon: "/images/icons/speak/3.png",
    name: "SurDM",
    desc: "Discord Marketing services",
  },
  {
    id: "5",
    text: "« Ma Maman m’avait reniée quand j’étais petit, et le jour où je lui ait dit que j’avais acheté hCoptcha, elle m’a dérenié »",
    icon: "/images/icons/speak/3.png",
    name: "SurDM",
    desc: "Discord Marketing services",
  },
];
export default function Speak() {
  return (
    <section className="speak">
      <div className="auto__container">
        <div className="speak__inner">
          <div className="speak__inner-title">
            <h2>
              Our Customers <span>Speak Best!</span>
            </h2>
          </div>
          <div className="speak__inner-slider">
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 2,
                },
                1260: {
                  slidesPerView: 2.4,
                },
              }}
            >
              {speakItems.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SpeakItem {...item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
const SpeakItem = (props: any) => {
  return (
    <div className="speakItem">
      <div className="speakItem__content">
        <span>
          <img src="/images/icons/quote.svg" alt="" />
        </span>
        <p className="big">{props.text}</p>
      </div>
      <div className="speakItem__foot">
        <div className="speakItem__foot-icon">
          <img src={props.icon} alt="" />
        </div>
        <div className="speakItem__foot-name">
          <h6 className="sm">{props.name}</h6>
          <p className="ex">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};
