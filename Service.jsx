import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import image1 from "../assets/img3.jpg";
import image2 from "../assets/img4.jpg";

const Service = () => {
  return (
    <div >
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false}  interval={1000}>
            
            <div>
                <img src={image1} alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={image2} alt="Item2" />
                <p className='legend'>Peer-to-peet Stack</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Service