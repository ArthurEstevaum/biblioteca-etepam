import { NextPage } from "next"
import { set, useForm } from "react-hook-form"
import { BookRegisterInput } from "../../types/BookRegisterInput"
import categories from "../../lib/categories"
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
import { VscError } from "react-icons/vsc"
import Link from "next/link"

const CadastroBook: NextPage = () => {
    const { register, handleSubmit } = useForm()
    async function onSubmit(book: BookRegisterInput) {
        const jsonBook = JSON.stringify(book)
        const endpoint = "../api/cadastro-books"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonBook
        }
        let res = await fetch(endpoint, options)
        
        if(res.status == 201) {
            setServerResponse('success')
        } else {
            setServerResponse('error')
        }
    }

    const [serverResponse, setServerResponse] = useState('')

    return(
        <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-11/12 sm:w-9/12 lg:w-6/12 m-auto space-y-6 h-full">
                <form action="https://localhost:5000/books" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div id="title" className="secondary-glass border-b border-gray-800 py-8 px-2 space-y-4 sm:space-y-0 rounded-t-lg">
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-5 h-5 ml-4 sm:ml-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <h1 className="text-white text-center text-xl sm:2xl font-bold">Cadastro de livros</h1>
                    </div>

                    <div className="primary-glass text-center space-y-4 pt-8 rounded-b-lg" >

                        {serverResponse === "success" &&
                            <section className="flex justify-center m-auto bg-green-900 w-5/12 rounded-lg p-5 mb-5 shadow-lg shadow-green-500/30">
                                <FaCheckCircle className="mr-4 text-white text-3xl" />
                                <h1 className="font-bold text-center text-lg text-gray-200">Livro Cadastrado com sucesso!</h1>
                            </section>
                        }

                        {serverResponse === "error" &&
                            <section className="flex justify-center m-auto bg-red-900 w-5/12 rounded-lg p-5 mb-5 shadow-lg shadow-red-500/30">
                                <VscError className="mr-4 text-white text-3xl" />
                                <h1 className="font-bold text-center text-lg text-gray-200">Houve uma falha no cadastro do livro!</h1>
                            </section>
                        }

                        <label>Título</label>
                        <input {...register("title", {required: true})} required className="input" placeholder="Título" />

                        <label>Autor</label>
                        <input {...register("author", {required: true})} required className="input" placeholder="Autor" />

                        <label>Estrelas</label>
                        <input type="number" {...register("stars", {required: true, min: 1, max: 5})}
                        min={1} max={5} className="input" placeholder="Estrelas" />

                        <label>Sinopse</label>
                        <input {...register("synopsis", {required: true, maxLength: 1000})}
                        maxLength={1000} required className="input" placeholder="Sinopse" />

                        <label>Quantidade disponível</label>
                        <input {...register("quantity", {required: true})} required className="input" placeholder="Quantidade" />

                        <label>Link da imagem da capa</label>
                        <input {...register("linkImagem", {required: true})} required className="input" placeholder="Imagem" />

                        <label>Categorias</label>
                        <ul className="flex flex-wrap justify-center text-gray-500 space-x-3 space-y-2 mx-[15%]">
                            {categories.map((category, index) => 
                            (<li key={index}><input type="checkbox" className="mr-2"
                            {...register(`${category}`)} />{category}</li>))}
                        </ul>


                        <div className="pb-8">
                            <button type="submit" className="button mt-10 py-2 px-3">Cadastrar livro</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default CadastroBook