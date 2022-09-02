import Image from 'next/image'
import bookCover from '../public/bookCover.jpg'

export default function Card() {
    return(
        <div id='card' className='light-glass p-3 rounded-xl m-auto mx-2'>
                <div className="flex justify-center">
                    <Image src={bookCover} alt='Capa livro' />
                </div>
                <h2 className='text-gray-100 text-center'>Psycology of Money</h2>
                <h3 className='text-gray-100 text-center'>Morgan Housel</h3>
        </div>
    )
}