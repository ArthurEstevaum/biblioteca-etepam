import { data } from "autoprefixer"
import Router from "next/router"

export default function CadastroBook() {
    async function cadastrarLivro(event) {
        event.preventDefault()
        const data = {
            title: event.target.title.value,
            author: event.target.author.value,
            category: event.target.category.value,
            stars: event.target.stars.value,
            synopsis: event.target.synopsis.value,
            quantity: event.target.quantity.value,
            image: event.target.image.value
        }
        const jsonData = JSON.stringify(data)
        console.log(jsonData)
        const endpoint = 'http://localhost:5000/books'
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonData
        }
        const response = await fetch(endpoint, options)
    }

    return(
        <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
            <main className="w-11/12 sm:w-9/12 lg:w-6/12 m-auto space-y-6 h-full">
                <form action="https://localhost:5000/books" method="post" onSubmit={cadastrarLivro}>
                    <div id="title" className="secondary-glass border-b border-gray-800 py-8 px-2 space-y-4 sm:space-y-0 rounded-t-lg">
                        <a href=" /">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-4 sm:ml-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <h1 className="text-white text-center text-xl sm:2xl font-bold">Cadastro de livros</h1>
                    </div>

                    <div className="primary-glass text-center space-y-4 pt-8 rounded-b-lg">
                        <label htmlFor="title">Título</label>
                        <input type="text" name="title" id="title" className="input" required />

                        <label htmlFor="author">Autor</label>
                        <input type="text" name="author" id="author" className="input" required />

                        <label htmlFor="category">Categoria</label>
                        <input type="text" name="category" id="category" className="input" required />

                        <label htmlFor="stars">Estrelas</label>
                        <input type="number" name="stars" id="stars" min={1} max={5} className="input" required />

                        <label htmlFor="synopsis">Sinopse</label>
                        <input type="text" name="synopsis" id="synopsis" className="input" required maxLength={1000} />

                        <label htmlFor="quantity">Quantidade disponível</label>
                        <input type="number" name="quantity" id="quantity" className="input" required />

                        <label htmlFor="image">Link da imagem da capa</label>
                        <input type="text" name="image" id="image" className="input" required />

                        <div className="pb-8">
                            <button type="submit" className="button mt-10">Cadastrar livro</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}