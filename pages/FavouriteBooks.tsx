import { GetServerSideProps, NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import jwt from "jsonwebtoken"
import { prisma } from "../lib/prismaClient";
import { UserFavouriteBooks } from "../types/userQueries";
import Card from "../components/Card";
import { Book } from ".";


const FavouriteBooks: NextPageWithLayout = (props: UserFavouriteBooks) => {
    const { userFavouriteBooks } = props
    const { favouriteBooks } = userFavouriteBooks
    console.log(favouriteBooks)
    return (
        <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-full h-full primary-glass p-10">
                <ul className="flex flex-wrap align-center justify-center   ">
                    {favouriteBooks.map((book: Book) =><li key={book.id} className="my-4 md:my-10"><Card title={book.title} author={book.author} linkImagem={book.linkImagem} synopsis={book.synopsis} /></li>)}
                </ul>
            </main>
        </div>
    )
}

export default FavouriteBooks

export const getServerSideProps: GetServerSideProps = async(context) => {
    const userToken = context.req.cookies['user-cookie']
    const verifiedToken = jwt.verify(userToken, process.env.JWT_SECRET)
    const userFavouriteBooks = await prisma.user.findUnique({
        where: {
            //@ts-ignore
            matricula: verifiedToken.data.matricula
        },
        select: {
            favouriteBooks: true
        }
    })

    return {
        props: { userFavouriteBooks }
    }
}

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

FavouriteBooks.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}