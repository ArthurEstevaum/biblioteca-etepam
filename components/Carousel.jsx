import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Card from "./Card";
import Link from "next/link";

export default function Carousel({ books }) {
    return (
        <div className="2xl:mx-auto 2xl:container flex justify-center relative">
            <div className="2xl:px-20 px-6 py-6 w-full lg:w-4/5">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={books.length} visibleSlides={2} step={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center hover:bg-white hover:bg-opacity-40 absolute z-30 -left-5 ml-8 focus:bg-white focus:bg-opacity-40 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider>
                            {books.map((book, index) => (<Slide key={book.id} index={index}>
                                <Link href={`/books/${book.id}`}>
                                    <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                        <div className="relative w-full h-full lg:block hidden">
                                            <Card title={book.title} author={book.author} linkImagem={book.linkImagem} synopsis={book.synopsis} />
                                        </div>
                                        <div className="relative w-full h-full lg:hidden">
                                            <Card title={book.title} author={book.author} linkImagem={book.linkImagem} synopsis={book.synopsis} />
                                        </div>
                                    </div>
                                </Link>
                            </Slide>))}
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center hover:bg-white hover:bg-opacity-40 absolute z-30 -right-5 mr-8 focus:bg-white focus:bg-opacity-40" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <CarouselProvider className="hidden sm:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={books.length} visibleSlides={2} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center hover:bg-white hover:bg-opacity-40 absolute z-30 left-28 ml-8 focus:bg-white focus:bg-opacity-40 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                            {books.map((book, index) => (
                            <Slide className="carousel__inner-slideLarge" key={book.id} index={index}>
                                <Link href={`/books/${book.id}`}>
                                    <div className="gallery-cell w-full h-full">
                                        <div className="relative w-full h-full lg:block hidden">
                                            <Card title={book.title} author={book.author} linkImagem={book.linkImagem} synopsis={book.synopsis} />
                                        </div>
                                        <div className="relative w-full h-full lg:hidden">
                                            <Card title={book.title} author={book.author} linkImagem={book.linkImagem} synopsis={book.synopsis} />
                                        </div>
                                    </div>
                                </Link>
                            </Slide>))}
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center hover:bg-white hover:bg-opacity-40 absolute z-30 right-28 mr-8 focus:bg-white focus:bg-opacity-40" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
            </style>
        </div>
    );
}