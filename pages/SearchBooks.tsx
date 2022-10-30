import Layout from "../components/Layout";
import { GetStaticProps, NextPage } from 'next'
import Link from "next/link";
import Image from "next/image"
import { ReactNode, ReactElement } from "react";
import { inputContext } from "../components/Layout";
import { useContext } from "react";
import { BookProps } from ".";
import { PrismaClient } from "@prisma/client";

const SearchBooks: NextPageWithLayout = ({books}: BookProps) => {
    const inputValue = useContext(inputContext)
    const filteredBooksByInput = books.filter(book => book.title.startsWith(inputValue))
    return (
        <main className="primary-glass min-w-screen min-h-screen">
            <ul>
                {filteredBooksByInput.map((book) => <Link href={`/books/${book.id}`} key={book.id}>
                    <li className="text-gray-200 border-b border-gray-800 py-3
                    space-x-5 ml-3">
                        <Image src={book.linkImagem} alt="book cover" className="lg:ml-[30vh] lg:mr-[15vh] ml-5 mr-3 w-3/12 sm:w-1/12 inline mx-auto cursor-pointer" />
                        <h1 className="sm:inline font-semibold text-lg cursor-pointer">{book.title} </h1>
                        <h2 className="sm:inline font-medium text-base">{book.categories.reduce((prev, current) => prev + current.category + ', ', '')}</h2>
                        <h3 className="sm:inline font-normal text-sm">{book.author} </h3>
                    </li>
                </Link>)}
            </ul>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prisma = new PrismaClient()
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