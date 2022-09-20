import { FaStar } from 'react-icons/fa'
import NavBar from '../../components/NavBar'

export default function Book(data) {

        const numeroEstrelas = parseInt(data.book.stars)
        const starsArray = []
        for (let i = 1; i <= numeroEstrelas; i++) {
            starsArray.push(i)
        }

    return (
        <div className="bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <NavBar />
            <main className="sm:grid grid-cols-[40%_60%] w-full h-full primary-glass pt-5 rounded-lg">
                <section id="title-cover" className="mx-auto space-y-10">
                    <h1 className="text-gray-200 border-b border-gray-800 p-4 text-center text-lg font-semibold w-full">{data.book.title}</h1>
                    <img src={data.book.image} alt="book cover" className="w-5/12 sm:w-10/12 mx-auto" />
                </section>

                <section id="book-info" className="text-gray-200 py-5 px-4 space-y-3 my-5 md:my-16">
                    <p>Autor: {data.book.author}</p>

                    <p>Categoria: {data.book.category}</p>

                    <p>Sinopse: {data.book.synopsis}</p>

                    <p className='border-t p-2 border-gray-800'>Disponibilidade: {data.book.quantity} livros disponíveis</p>

                        {starsArray.map((starNumber) => (
                            <FaStar className='text-yellow-500 w-10 inline' key={starNumber} />))}

                    <div id="buttons" className="flex justify-center md:justify-start space-x-2">
                        <button className="button inline my-4">Solicitar</button>
                        <button className="button inline my-4">Baixar</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const { params } = context

    const res = await fetch(`http://localhost:5000/books/${params.bookId}`)

    const book = await res.json()

    return {
        props: { book }
    }
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:5000/books')

    const data = await res.json()

    const paths = data.map((book) => {return {
        params: {
            bookId: `${book.id}`
        }
    }})

    return { paths, fallback: true }
}