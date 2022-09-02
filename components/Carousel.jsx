import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Card from "./Card";

export default function Carousel() {
    return (
       <CarouselProvider visibleSlides={4} totalSlides={10} step={1} naturalSlideHeight={500}
       naturalSlideWidth={400} infinite>
            <div className="relative">
                    <Slider>
                        <Slide index={0}>
                            <Card />
                        </Slide>
                        <Slide index={1}>
                            <Card />
                        </Slide>
                        <Slide index={2}>
                            <Card />
                        </Slide>
                        <Slide index={3}>
                            <Card />
                        </Slide>
                        <Slide index={4}>
                            <Card />
                        </Slide>
                        <Slide index={5}>
                            <Card />
                        </Slide>
                        <Slide index={6}>
                            <Card />
                        </Slide>
                        <Slide index={7}>
                            <Card />
                        </Slide>
                        <Slide index={8}>
                            <Card />
                        </Slide>
                        <Slide index={9}>
                            <Card />
                        </Slide>
                    </Slider>
                    <ButtonBack className="absolute top-[50%] left-0 bg-gray-900">Back</ButtonBack> 
                    <ButtonNext className="absolute top-[50%] right-0 bg-gray-900">Next</ButtonNext> 
            </div>
       </CarouselProvider>
    )
}
