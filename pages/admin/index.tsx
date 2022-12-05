import { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";

const AdminDashboard: NextPage = () => {
    Router.reload()
    return (
        <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-12/12 sm:w-6/12 lg:w-4/12 m-auto md:py-[10vh]">
                <section className="secondary-glass rounded-t-lg py-8 px-2 border-b border-gray-800 text-center relative">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-5 h-5 ml-4 sm:ml-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <h1 className="text-center text-xl font-bold text-gray-200">Gerenciamento da biblioteca</h1>
                </section>
                <section className="primary-glass rounded-b-lg p-10 m-0 space-y-10 pb-20">
                    <div className="w-9/12 lg:w-5/12 mx-auto cursor-pointer text-center text-gray-200 px-6 py-2
                    hover:bg-blue-900 rounded-xl
                    transition duration-500 ease-in-out bg-blue-600">
                        <Link href="/admin/CadastroBook">Cadastrar livro</Link>
                    </div>
                    <div className="w-9/12 lg:w-5/12 mx-auto cursor-pointer text-center text-gray-200 px-6 py-2
                    hover:bg-blue-900 rounded-xl
                    transition duration-500 ease-in-out bg-blue-600">
                        <Link href="https://cloud.prisma.io/etepam-biblioteca/biblioteca-etepam/production/databrowser">Acessar banco de dados</Link>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AdminDashboard