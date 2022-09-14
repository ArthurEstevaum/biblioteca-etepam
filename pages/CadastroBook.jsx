export default function CadastroBook() {
    return(
        <div className="bg-gray-100 bg-cover w-full h-full" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-11/12 sm:w-9/12 lg:w-6/12 m-auto space-y-6">
                <form action="" method="post">
                    <div id="title" className="secondary-glass border-b border-gray-800 py-8 px-2 space-y-4 sm:space-y-0 rounded-t-lg">
                        <a href=" /">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-4 sm:ml-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <h1 className="text-white text-center text-xl sm:2xl font-bold">Cadastro de livros</h1>
                    </div>

                    <div className="primary-glass text-center space-y-3 pt-8 rounded-b-lg">
                        <label htmlFor="title">Título</label>
                        <input type="text" name="title" id="title" />

                        <label htmlFor="author">Autor</label>
                        <input type="text" name="author" id="author" />

                        <label htmlFor="category">Categoria</label>
                        <input type="text" name="category" id="category" />

                        <label htmlFor="stars">Estrelas</label>
                        <input type="number" name="stars" id="stars" min={1} max={5} />

                        <label htmlFor="synopsis">Sinopse</label>
                        <input type="text" name="synopsis" id="synopsis" />

                        <label htmlFor="quantity">Quantidade disponível</label>
                        <input type="number" name="quantity" id="quantity" />

                        <div className="pb-8">
                            <button type="submit" className="button mt-10">Cadastrar livro</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}