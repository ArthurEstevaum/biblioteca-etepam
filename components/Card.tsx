import { Book } from "../pages";
import Image from "next/image"

export default function Card({title, author, linkImagem}: Book) {
    return(
        <div id='card' className='group relative cursor-pointer overflow-hidden mx-8'>
                <div className="flex justify-center">
                    <Image src={linkImagem} alt="Capa livro" className="w-full scale-130 transition delay-200 ease-out
                    group-hover:scale-110 group-hover:opacity-25 group-hover:-translate-y-4" />
                </div>
                <div className="text-center text-gray-200 absolute left-0 bottom-0 w-full p-4">
                    <h1 className="font-semibold text-lg opacity-0 translate-y-4 transition ease-out delay-300 
                    group-hover:opacity-100 group-hover:-translate-y-12">{title}</h1>
                    <h2 className="opacity-0 translate-y-4 transition ease-out delay-300 
                    group-hover:opacity-100 group-hover:-translate-y-12">{author}</h2>
                </div>
                <h1 className="text-center text-gray-200 font-bold text-md lg:hidden">{title}</h1>
                <h2 className="text-center text-gray-200 text-sm lg:hidden">{author}</h2>
        </div>
    )
}