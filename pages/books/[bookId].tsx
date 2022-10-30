import { FaStar } from 'react-icons/fa';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PrismaClient } from '@prisma/client';
import { Book } from '..';

const Book: NextPageWithLayout = (book : Book) => {
    //criar uma array com o mesmo comprimento do número de letras
    //para usar .map na array e imprimir estrelas de acordo com o comprimento da array
    //@ts-ignore
    const numeroEstrelas = parseInt(book.stars)
    const starsArray = []
    for (let i = 1; i <= numeroEstrelas; i++) {
        starsArray.push(i)
    }

    return (
        <main className="sm:grid grid-cols-[40%_40%] w-full h-full primary-glass pt-5 rounded-lg">
            <section id="title-cover" className="mx-auto space-y-10">
                <h1 className="text-gray-200 border-b border-gray-800 p-4 text-center text-lg font-semibold w-full">{book.title}</h1>
                <Image src={book.linkImagem} alt="book cover" className="w-5/12 sm:w-10/12 mx-auto" />
            </section>

            <section id="book-info" className="text-gray-200 py-5 px-4 space-y-3 my-5 md:my-16">
                <p>Autor: {book.author}</p>

                <p>Categorias: {book.categories.reduce((prev, current) => prev + current.category + ', ', '')}</p>

                <p>Sinopse: {book.synopsis}</p>

                <p className='border-t p-2 border-gray-800'>Disponibilidade: {book.quantidade} livros disponíveis</p>

                    {starsArray.map((starNumber) => (
                        <FaStar className='text-yellow-500 w-10 inline' key={starNumber} />))}

                <div id="buttons" className="flex justify-center md:justify-start space-x-2">
                    <Link href="https://api.whatsapp.com/send?phone=5581998787714&text=Ol%C3%A1%2C%20quero%20pedir%20um%20livro!%22%3E"><button className="button inline my-4">Solicitar</button></Link>
                    <button className="button inline my-4">Baixar</button>
                </div>
            </section>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context
    //@ts-ignore
    const bookId = parseInt(params.bookId)

    const prisma = new PrismaClient()

    const book = await prisma.book.findUnique({
        where: {
            id: bookId
        }, include: {
            categories: true
        }
    })

    return {
        props: book
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    const prisma = new PrismaClient()

    const data = await prisma.book.findMany()

    const paths = data.map((book) => {return {
        params: {
            bookId: `${book.id}`
        }
    }})

    return { paths, fallback: false }
}

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

Book.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Book