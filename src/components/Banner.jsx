import React from "react";
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="homeImg">
        <Slider {...settings}>
          <div>
            <img src="https://www.designerpeople.com/wp-content/uploads/2020/07/amazon-product-listing-guide.jpg" alt="" className="sliderImg"/>
          </div>
          <div>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg" alt="" className="sliderImg"/>
          </div>
          <div>
          <img src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg" alt="" className="sliderImg"/>
          </div>
        </Slider>
      </div>
    );
  }
}
