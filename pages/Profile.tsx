import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prismaClient";
import { UserInfo } from "../types/userQueries";

const Profile: NextPage = (props : UserInfo) => {
    const { userInfo } = props
    const router = useRouter()
    router.reload()

    async function logout() {
        const endpoint = "./api/logout"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        }
        const res = await fetch(endpoint, options)
        if(res.status === 200) {
            router.push("/")
        }
    }

    return (
        <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-12/12 sm:w-6/12 lg:w-4/12 m-auto md:py-[10vh]">
                <section className="secondary-glass rounded-t-lg py-8 px-2 border-b border-gray-800
                text-center relative">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-5 h-5 ml-4 sm:ml-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <h1 className="inline text-gray-200 font-bold text-xl">Meu usuário</h1>

                    <button className="text-gray-200 text-lg px-6 py-2 absolute right-5 bottom-5
                    hover:bg-blue-900 rounded-full
                    transition duration-500 ease-in-out bg-blue-600"
                    onClick={logout}>Sair</button>

                </section>
                <section className="primary-glass rounded-b-lg p-10 m-0">
                    <div className="text-gray-200 space-y-3 pb-10">
                        <h2 className="text-center font-semibold text-base">Informações:</h2>
                        <p>Nome: {userInfo.name}</p>
                        <p>Id de usuário: {userInfo.id}</p>
                        <p>Email: {userInfo.email}</p>
                        <p>Telefone: {userInfo.telefone}</p>
                        <p>Matricula: {userInfo.matricula}</p>
                        <p>Ensino: {userInfo.ensino}</p>
                        <p>Curso: {userInfo.course}</p>
                        {userInfo.isAdmin &&
                            <div className="w-5/12 mx-auto cursor-pointer text-center text-gray-200 px-6 py-2
                            hover:bg-blue-900 rounded-xl
                            transition duration-500 ease-in-out bg-blue-600">
                                <Link href="/admin">Painel de administrador</Link>
                            </div>
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Profile

export const getServerSideProps: GetServerSideProps = async(context) => {
    const userToken = context.req.cookies['user-cookie']
    const verifiedToken = jwt.verify(userToken, process.env.JWT_SECRET)
    const userInfo = await prisma.user.findUnique({
        where: {
            //@ts-ignore
            matricula: verifiedToken.data.matricula
        },
        select: {
            bookOwned: true,
            course: true,
            email: true,
            ensino: true,
            id: true,
            matricula: true,
            telefone: true,
            name: true,
            isAdmin: true
        }
    })
    return {
        props: {
            userInfo
        }
    }
}