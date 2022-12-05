import { NextPage } from "next"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { LoginData } from "../types/UserRegisterInput"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { VscError } from "react-icons/vsc"

const Login: NextPage = () => {

    const [serverResponse, setServerResponse] = useState('')
    const { register, handleSubmit } = useForm()
    const router = useRouter()
    useEffect(() => {
        router.replace('/Profile')
    }, [router])

    async function onSubmit(loginData: LoginData) {
        const jsonLoginData = JSON.stringify(loginData)
        const endpoint = "../api/login"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonLoginData
        }
        const res = await fetch(endpoint, options)
        if(res.status === 200) {
            router.push("/")
        } else {
            setServerResponse('error')
        }
    }


    return (
        <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-12/12 sm:w-6/12 lg:w-5/12 m-auto space-y-6 md:py-[10vh]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div id="title" className="secondary-glass border-b border-gray-800 py-8 px-2 space-y-4 sm:space-y-0 rounded-t-xl">
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-5 h-5 ml-4 sm:ml-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <h1 className="text-white text-center text-xl sm:2xl font-bold">Seja bem-vindo de volta</h1>
                    </div>

                    <div className="primary-glass text-center space-y-3 pt-8 rounded-b-xl">
                        {serverResponse === "error" &&
                            <section className="flex justify-center m-auto bg-red-900 w-5/12 rounded-lg p-5 mb-5 shadow-lg shadow-red-500/30">
                                <VscError className="mr-4 text-white text-3xl" />
                                <h1 className="font-bold text-center text-lg text-gray-200">Usuário ou senha incorretos.</h1>
                            </section>
                        }

                        <label htmlFor="Email">Email institucional</label>
                        <input {...register("email")} placeholder="seunome@aluno.educacao.pe.gov.br" className="input" required />

                        <label htmlFor="Senha">Senha</label>
                        <input {...register("password")} type="password" placeholder="Senha" className="input" required />

                        <div className="pb-8 space-y-5">
                            <button type="submit" className="button mt-10 py-2 px-3 block m-auto">Entrar</button>
                            <Link href="/CadastroUser">
                                <h2 className="text-gray-500 hover:text-gray-200 block text-center pb-10 cursor-pointer">Não tem uma conta? Cadastre-se!</h2>
                            </Link>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Login
