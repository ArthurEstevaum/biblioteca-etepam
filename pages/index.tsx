import HeaderHome from '../components/HeaderHome'
import BookCatalog from '../components/BookCatalog'
import Layout from '../components/Layout'
import { ReactNode } from 'react'
import { GetStaticProps, NextPage } from 'next'
import {Categories, PrismaClient} from '@prisma/client'
import { ReactElement } from 'react'

export type BookProps = {
    books: Book[]
}
export type Book = {
    id: number,
    title: string,
    author: string,
    synopsis: string,
    linkImagem: string,
    stars: number,
    quantidade: number,
    userId?: number,
    categories: Categories[]
}

const Home: NextPageWithLayout = ({ books }: BookProps) => {
    return (
        <main>
            <HeaderHome />
            <BookCatalog books={books} />
        </main>
    )
}

export const getStaticProps: GetStaticProps = async() => {
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

//importação do layout (navbar)
type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Home