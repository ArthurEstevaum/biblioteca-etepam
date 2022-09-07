import Image from 'next/image'
import bookCover from '../public/bookCover.jpg'

export default function Card() {
    return(
        <div id='card' className='light-glass p-3 rounded-xl mx-2 hover:bg-opacity-50 transition duration-300 ease-in cursor-pointer'>
                <div className="flex justify-center">
                    <Image src={bookCover} alt='Capa livro' height={280} quality={100} />
                </div>
                <h2 className='text-gray-100 text-center'>Psycology of Money</h2>
                <h3 className='text-gray-100 text-center'>Morgan Housel</h3>
        </div>
    )
}