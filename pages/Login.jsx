export default function Login() {
    return (
        <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-10/12 sm:w-6/12 lg:w-5/12 m-auto space-y-6 py-[10vh]">
                <form action="">
                    <div id="title" className="secondary-glass border-b border-gray-800 py-8 px-2 space-y-4 sm:space-y-0 rounded-t-lg">
                        <a href=" /">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-4 sm:ml-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <h1 className="text-white text-center text-xl sm:2xl font-bold">Seja bem-vindo de volta</h1>
                    </div>

                    <div className="primary-glass text-center space-y-3 pt-8 rounded-b-lg">
                        <label htmlFor="Email">Email institucional</label>
                        <input type="email" name="Email" id="Email" placeholder="seunome@aluno.educacao.pe.gov.br" className="input" required />

                        <label htmlFor="Senha">Senha</label>
                        <input type="password" name="Senha" id="Senha" placeholder="Senha" className="input" required />

                        <div className="pb-8"><button type="submit" className="button mt-10">Entrar</button></div>
                    </div>
                </form>
            </main>
        </div>
    )
}
