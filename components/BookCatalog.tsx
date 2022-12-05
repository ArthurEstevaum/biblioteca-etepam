import Carousel from './Carousel'
import { BookProps } from '../pages'
import categories from '../lib/categories'

export default function BookCatalog({ books }: BookProps) {
    return (
        <section id="bookcatalog" className="primary-glass w-full pt-[7vh]">
                <div className="category md:w-5/6 mx-auto">
                    <h2 className='text-gray-200 text-lg lg:text-xl font-semibold ml-[10vw]'>Recomendados</h2>
                    <Carousel books={books.filter((book) => book.stars == 5)} />
                </div>
                {categories.map((category) => <div key={category} className="categoy md:w-5/6 mx-auto">
                    <h2 className='text-gray-200 text-lg lg:text-xl font-semibold ml-[10vw]'>{category}</h2>
                    <Carousel books={books.filter((book) => book.categories.some((categoria) => categoria.category === category))} />
                </div>)}
        </section>
    )
}