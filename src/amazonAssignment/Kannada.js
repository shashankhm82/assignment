import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { movieData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import {BrowserRouter, Link } from "react-router-dom";


const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
   //infinite:false,
   //slidesToScroll:3,
  centerMode: true,
  centerPadding: "360px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Kannada = () => {
  return (
    <div style={{ margin: "10px" }} className="carousel">
      <h3>Top Kannada Picks</h3>
     
      <a href="/Discription.js">
      <Slider {...carouselProperties}>
        {movieData.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
      </a>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div  style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "14px", padding: "5px 0" }}>TOP TRNDING TVs</p>
    </div>
  );
};

export default Kannada;
