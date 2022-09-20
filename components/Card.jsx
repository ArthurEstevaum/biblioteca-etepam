import Image from 'next/image'
import bookCover from '../public/bookCover.jpg'

export default function Card(props) {
    return(
        <div id='card' className='light-glass p-3 rounded-xl mx-2 hover:bg-opacity-50 transition duration-300 ease-in cursor-pointer h-fit'>
                <div className="flex justify-center">
                    <img src={props.image} alt="Capa livro" />
                </div>
                <h2 className='text-gray-100 text-center'>{props.title}</h2>
                <h3 className='text-gray-100 text-center'>{props.author}</h3>
        </div>
    )
}