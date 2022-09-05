import Carousel from '../components/Carousel'

export default function BookCatalog() {
    return (
        <section id="bookcatalog" className="primary-glass w-full pt-[10vh]">
                <div className="category md:w-5/6 mx-auto">
                    <h2 className='text-gray-200 text-lg lg:text-xl font-semibold ml-[10vw]'>Recomendados</h2>
                    <Carousel />
                </div>
                <div className="category md:w-5/6 mx-auto">
                    <h2 className='text-gray-200 text-lg lg:text-xl font-semibold ml-[10vw]'>Finanças</h2>
                    <Carousel />
                </div>
        </section>
    )
}