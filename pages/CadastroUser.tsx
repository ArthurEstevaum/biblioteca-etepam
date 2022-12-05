import { NextPage } from "next"
import { VscError } from "react-icons/vsc"
import { FaCheckCircle } from "react-icons/fa"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { UserRegisterInput } from "../types/UserRegisterInput"
import Link from "next/link"


const CadastroUser: NextPage = () => {
    
    const { register, handleSubmit } = useForm()
    const [serverResponse, setServerResponse] = useState('')
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    async function onSubmit(userFormData: UserRegisterInput) {
        const jsonUserData = JSON.stringify(userFormData)
        const endpoint = "../api/cadastro-user"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonUserData,
            cookies: ''
        }
        let res = await fetch(endpoint, options)
        if(res.status == 201) {
            setServerResponse('success')
        } else {
            setServerResponse('error')
        }
    }

    return (
        <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-12/12 sm:w-9/12 lg:w-6/12 m-auto space-y-6 h-full">
                <form onSubmit={handleSubmit(onSubmit)} className="h-full">
                    <div id="title" className="secondary-glass rounded-t-md border-b border-gray-800 py-8 px-2 space-y-4 sm:space-y-0">
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-5 h-5 ml-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <h1 className="text-white text-center text-xl sm:2xl font-bold">Seja bem-vindo à biblioteca</h1>
                    </div>
                    <div className="primary-glass text-center space-y-3 pt-8 rounded-b-md">
                        {serverResponse === "success" &&
                            <section className="flex justify-center m-auto bg-green-900 w-5/12 rounded-lg p-5 mb-5 shadow-lg shadow-green-500/30">
                                <FaCheckCircle className="mr-4 text-white text-3xl" />
                                <h1 className="font-bold text-center text-lg text-gray-200">Seu usuário foi cadastrado com sucesso!</h1>
                            </section>
                        }

                        {serverResponse === "error" &&
                            <section className="flex justify-center m-auto bg-red-900 w-5/12 rounded-lg p-5 mb-5 shadow-lg shadow-red-500/30">
                                <VscError className="mr-4 text-white text-3xl" />
                                <h1 className="font-bold text-center text-lg text-gray-200">O usuário já existe ou seu preenchimento foi inválido!</h1>
                            </section>
                        }

                        {passwordValue !== confirmPasswordValue &&
                            <section className="bg-red-900 w-8/12 flex items-center space-x-5 m-auto rounded-lg p-5 mb-5 shadow-lg shadow-red-500/30">
                                <VscError className="text-3xl text-gray-400" />
                                <h1 className="font-bold text-lg text-gray-400">O campo Senha deve corresponder ao campo Confirmar senha</h1>
                            </section>
                        }
                        <label>Nome completo</label>
                        <input {...register("name")} required placeholder="nome" className="input" />

                        <label>Email constitucional</label>
                        <input {...register("email")} placeholder="seunome@aluno.educacao.pe.gov.br" required
                        pattern="[a-z]+@aluno[.]educacao[.]pe[.]gov[.]br"
                        title="o formato do email deve ser [seunome]@aluno.educacao.pe.gov.br" className="input" />

                        <label>Senha</label>
                        <input {...register("password")} onChange={(event) => setPasswordValue(event.target.value)} 
                        type="password" placeholder="Senha" required maxLength={15} className="input" />

                        <label>Confirmar senha</label>
                        <input value={confirmPasswordValue} onChange={(event) => setConfirmPasswordValue(event.target.value)}
                        type="password" placeholder="Confirmar senha" required maxLength={15} className="input" />

                        <label>Número de telefone</label>
                        <input {...register("telefone")} placeholder="(81) 9xxxx-xxxx" required maxLength={15} className="input" />

                        <label>Matrícula</label>
                        <input {...register("matricula")} placeholder="Matrícula" required maxLength={7} className="input" />


                        <label>Modalidade de ensino</label>
                        <select {...register("ensino")} required>
                            <option value="integrado">Integrado</option>
                            <option value="subsequente">subsequente</option>
                        </select>

                        <label htmlFor="curso">Curso técnico</label>
                        <select {...register("course")} required>
                            <option value="msi">Manutenção e Suporte em Informática</option>
                            <option value="mct">Mecatrônica</option>
                            <option value="mec">Mecânica Industrial</option>
                            <option value="log">Logística</option>
                        </select>

                        <div className="space-y-5">
                            <button id="buttonLogin" disabled={passwordValue !== confirmPasswordValue} className="button mt-10 py-2 px-3" type="submit">Cadastrar</button>
                            <a
                            href="https://raw.githubusercontent.com/VitorMendonca62/biblioteca-etepam/main/public/assets/Como%20conseguir%20a%20sua%20matricula.pdf"
                            target="_blank" hrefLang="pt-br" rel="noreferrer"  
                            className="text-gray-400 hover:text-gray-200 block text-center pb-10">Como conseguir o número da matrícula?</a>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default CadastroUser