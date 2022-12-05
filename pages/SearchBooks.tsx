import Layout from "../components/Layout";
import { GetStaticProps, NextPage } from 'next'
import Link from "next/link";
import Image from "next/image"
import { ReactNode, ReactElement, useState } from "react";
import { inputContext } from "../components/Layout";
import { useContext } from "react";
import { BookProps } from ".";
import { prisma } from "../lib/prismaClient";

const SearchBooks: NextPageWithLayout = ({books}: BookProps) => {

    const inputValue = useContext(inputContext)
    const [currentPage, setCurrentPage] = useState(0)
    const lowerInputValue = inputValue.toLowerCase()
    const filteredBooksByInput = books.filter(book => book.title.toLowerCase().includes(lowerInputValue))
    const pages = Math.ceil(filteredBooksByInput.length / 5)
    const startIndex = currentPage * 5
    const endIndex = startIndex + 5
    const currentItems = filteredBooksByInput.slice(startIndex, endIndex)
    return (
        <main className="primary-glass min-w-screen min-h-screen">
            {!filteredBooksByInput.length && 
                <h1 className="font-bold text-center text-gray-200 text-xl pt-[20vh]">Nenhum livro encontrado.</h1>
            }
            <ul>
                {currentItems.map((book) => <Link href={`/books/${book.id}`} key={book.id}>
                    <li className="sm:flex sm:items-center text-gray-200 border-b border-gray-800 py-3
                    space-x-5 ml-3">
                        <div className="relative lg:ml-[30vh] lg:mr-[15vh] ml-5 mr-3 w-3/12 sm:w-1/12 inline mx-auto cursor-pointer">
                            <Image src={book.linkImagem} alt="book cover" width={150} height={220} />
                        </div>
                        <h1 className="sm:inline font-semibold text-lg cursor-pointer">{book.title} </h1>
                        <h2 className="sm:inline font-medium text-base">{book.categories.reduce((prev, current) => prev + current.category + ', ', '')}</h2>
                        <h3 className="sm:inline font-normal text-sm">{book.author} </h3>
                    </li>
                </Link>)}
            </ul>
            <section className="flex justify-center space-x-2">
                {Array.from(Array(pages), (button, index) => <button value={index} key={index} 
                onClick={(event) => setCurrentPage(parseInt(event.currentTarget.value))} className="button px-5 py-3">{index + 1}</button>)}
            </section>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const books = await prisma.book.findMany({
        include: {
            categories: true
        }
    })
    return {
        props: {books},
        revalidate: 60 * 60 * 4
    }
}

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

SearchBooks.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default SearchBooks