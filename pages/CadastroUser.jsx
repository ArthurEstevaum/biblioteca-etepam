export default function CadastroUser() {
    return (
        <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-10/12 sm:w-9/12 lg:w-6/12 m-auto space-y-6 h-full">
                <form onSubmit={(event) => event.preventDefault} className="h-full">
                    <div id="title" className="secondary-glass rounded-t-md border-b border-gray-800 py-8 px-2 space-y-4 sm:space-y-0">
                        <a href=" /">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <h1 className="text-white text-center text-xl sm:2xl font-bold">Seja bem-vindo à biblioteca</h1>
                    </div>
                    <div className="primary-glass text-center space-y-3 pt-8 rounded-b-md">
                        <label htmlFor="nome">Nome completo</label>
                        <input type="text" id="nome" placeholder="Nome completo" required className="input" />

                        <label htmlFor="email">Email constitucional</label>
                        <input type="email" id="email" placeholder="seunome@aluno.educacao.pe.gov.br" required
                        pattern="[a-z]+@aluno[.]educacao[.]pe[.]gov[.]br"
                        title="o formato do email deve ser [seunome]@aluno.educacao.pe.gov.br" className="input" />

                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" placeholder="Senha" required maxLength="15" className="input" />

                        <label htmlFor="confirmPassword">Confirmar senha</label>
                        <input type="password" id="passwordConfirm" placeholder="Confirmar senha" required maxLength="15" className="input" />

                        <label htmlFor="telefone">Número de telefone</label>
                        <input type="text" id="telefone" placeholder="(81) 9xxxx-xxxx" required maxLength="15" className="input" />

                        <label htmlFor="matrícula">Matrícula</label>
                        <input type="text" id="matricula" placeholder="Matrícula" required maxLength="7" className="input" />


                        <label htmlFor="modalidade">Modalidade de ensino</label>
                        <select id="selectModalidadeEnsino">
                            <option value="integrado">Integrado</option>
                            <option value="subsequente">subsequente</option>
                        </select>

                        <label htmlFor="curso">Curso técnico</label>
                        <select id="selectCurso">
                            <option value="msi">Manutenção e Suporte em Informática</option>
                            <option value="mct">Mecatrônica</option>
                            <option value="mec">Mecânica Industrial</option>
                            <option value="log">Logística</option>
                        </select>

                        <div className="space-y-5">
                            <button id="buttonLogin" className="button mt-10" type="submit">Cadastrar</button>
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