import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaChevronDown } from "react-icons/fa";

export default function HeaderHome() {

    return (
        <section className="bg-cover bg-no-repeat h-[60vh] sm:h-[100vh] bg-center relative" style={{backgroundImage: 'url(/etepam-background-blur.png)'}}>

            <CarouselProvider isIntrinsicHeight={true} naturalSlideWidth={100} isPlaying={true} interval={5000}
            visibleSlides={1} infinite={true} totalSlides={3} step={1} playDirection={'backward'} 
            className="pt-[15vh]">
                <Slider>
                    <Slide index={0}>
                        <div className="w-2/3 ml-[10vw] sm:ml-[15vw]">
                            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">Bem vindo à biblioteca ETEPAM</h1>
                            <h2 className="sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-100">A biblioteca da escola técnica mais antiga do norte-nordeste</h2>
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div className="w-2/3 ml-[10vw] sm:ml-[15vw]">
                            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">Procure os livros disponíveis</h1>
                            <h2 className="sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-100">e salve-os na sua lista de favoritos</h2>
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div className="w-2/3 ml-[10vw] sm:ml-[15vw]">
                            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">Cadastre-se e requisite livros para empréstimo</h1>
                            <h2 className="sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-100">Verifique a disponibilidade dos livros</h2>
                        </div>
                    </Slide>
                </Slider>
            </CarouselProvider>
            <button onClick={() => bookcatalog.scrollIntoView({behavior:'smooth'})} className="text-white absolute bottom-[15%] ml-[50%] p-2 sm:p-4 lg:p-6 hover:bg-white hover:bg-opacity-25 sm:px-4 rounded-full transition duration-500 ease-in-out">
                <FaChevronDown size={20} />
            </button>
        </section>
    )
}