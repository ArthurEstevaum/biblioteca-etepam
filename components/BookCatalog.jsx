import Carousel from '../components/Carousel'

export default function BookCatalog({ books }) {
    return (
        <section id="bookcatalog" className="primary-glass w-full pt-[7vh]">
                <div className="category md:w-5/6 mx-auto">
                    <h2 className='text-gray-200 text-lg lg:text-xl font-semibold ml-[10vw]'>Recomendados</h2>
                    <Carousel books={books} />
                </div>
                <div className="category md:w-5/6 mx-auto">
                    <h2 className='text-gray-200 text-lg lg:text-xl font-semibold ml-[10vw]'>Literatura nacional</h2>
                    <Carousel books={books.filter((books) => books.category === "Literatura nacional")} />
                </div>
        </section>
    )
}