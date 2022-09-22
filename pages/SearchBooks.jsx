import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { inputContext } from "../components/Layout";
import { useContext } from "react";

export default function SearchBooks(data) {
    const inputValue = useContext(inputContext)
    const filteredBooksByInput = data.books.filter(book => book.title.startsWith(inputValue))
    return (
        <main className="primary-glass min-w-screen min-h-screen">
            <ul>
                {filteredBooks.map((book) => <Link href={`/books/${book.id}`} key={book.id}>
                    <li className="text-gray-200 border-b border-gray-800 py-3
                    space-x-5 ml-3">
                        <img src={book.image} alt="book cover" className="lg:ml-[30vh] lg:mr-[15vh] ml-5 mr-3 w-3/12 sm:w-1/12 inline mx-auto cursor-pointer" />
                        <h1 className="sm:inline font-semibold text-lg cursor-pointer">{book.title} </h1>
                        <h2 className="sm:inline font-medium text-base">{book.category} </h2>
                        <h3 className="sm:inline font-normal text-sm">{book.author} </h3>
                    </li>
                </Link>)}
            </ul>
        </main>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/books')
    const books = await res.json()
    return {
        props: { books }
    }
}

SearchBooks.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}