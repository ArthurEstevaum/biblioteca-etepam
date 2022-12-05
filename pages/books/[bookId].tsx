import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { VscError } from 'react-icons/vsc';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement, ReactNode, useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { prisma } from '../../lib/prismaClient';
import { useRouter } from 'next/router';
import { Book } from '..';

const Book: NextPageWithLayout = (book : Book) => {
    //criar uma array com o mesmo comprimento do número de letras
    //para usar .map na array e imprimir estrelas de acordo com o comprimento da array
    //@ts-ignore
    const numeroEstrelas = book.stars
    const starsArray = []
    for (let i = 1; i <= numeroEstrelas; i++) {
        starsArray.push(i)
    }

    const [serverResponse, setServerResponse] = useState('')
    const router = useRouter()
    async function addFavourite() {
        const jsonId =  JSON.stringify(book.id)
        const endpoint = "../api/add-favourite"
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonId
        }
        const res = await fetch(endpoint, options)
        const { message: serverMessage } = await res.json()

        if(res.status === 400) {
            router.push("/Login") //Redireciona o usuário para o login caso ele n esteja em sessão
        } else if(serverMessage === 'Livro favoritado com sucesso') {
            setServerResponse('success')
        } else {
            setServerResponse('error')
        }
    }

    return (
        <main className="sm:grid grid-cols-[40%_40%] w-full h-full primary-glass pt-5 rounded-lg">
            <section id="title-cover" className="mx-auto space-y-10 w-9/12">
                <h1 className="text-gray-200 border-b border-gray-800 p-4 text-center text-lg font-semibold w-full">{book.title}</h1>
                <div className="relative w-7/12 sm:10/12 mx-auto text-center">
                    <Image src={book.linkImagem} alt="book cover" width={200} height={300} />
                </div>
            </section>

            <section id="book-info" className="text-gray-200 py-5 px-4 space-y-3 my-5 md:my-16">

                {serverResponse === "success" &&
                    <section className="flex justify-center m-auto bg-green-900 w-8/12 rounded-lg p-5 mb-5 shadow-lg shadow-green-500/30">
                        <FaCheckCircle className="mr-4 text-white text-2xl" />
                        <h1 className="text-center text-gray-200">O livro foi adicionado aos seus favoritos com sucesso!</h1>
                    </section>
                }

                {serverResponse === "error" &&
                    <section className="flex justify-center m-auto bg-red-900 w-8/12 rounded-lg p-3 mb-5 shadow-lg shadow-red-500/30">
                        <VscError className="mr-4 text-white text-2xl" />
                        <h1 className="text-center text-gray-200">Este livro já está na sua lista de favoritos.</h1>
                    </section>
                }

                <p>Autor: {book.author}</p>

                <p>Categorias: {book.categories.reduce((prev, current) => prev + current.category + ', ', '')}</p>

                <p>Sinopse: {book.synopsis}</p>

                <p className='border-t p-2 border-gray-800'>Disponibilidade: {book.quantidade} livros disponíveis</p>

                    {starsArray.map((starNumber) => (
                        <FaStar className='text-yellow-500 text-xl w-10 inline' key={starNumber} />))}

                <div id="buttons" className="flex justify-center md:justify-start space-x-2">
                    <Link href="https://api.whatsapp.com/send?phone=5581998787714&text=Ol%C3%A1%2C%20quero%20pedir%20um%20livro!%22%3E"><button className="button inline my-4 py-2 px-3">Solicitar</button></Link>
                    <button className="button my-4 py-2 px-3" onClick={addFavourite}>Favoritar</button>
                </div>
            </section>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context
    //@ts-ignore
    const bookId = parseInt(params.bookId)

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

    const data = await prisma.book.findMany()

    const paths = data.map((book) => {return {
        params: {
            bookId: `${book.id}`
        }
    }})

    return { paths, fallback: 'blocking' }
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