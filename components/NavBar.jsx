import { useState } from 'react'
import { FaSistrix, FaHeart, FaUser } from 'react-icons/fa'

export default function NavBar() {

    const inputStyles = {
        hidden: 'hidden',
        active: 'inline'
    }

    const searchbarStyles = {
        hidden: 'primary-glass-screens sm:opacity-70 sm:border-2 sm:border-neutral-100/75',
        active: 'primary-glass-screens sm:opacity-70 sm:border-2 sm:border-neutral-100/75 primary-glass opacity-70'
    }

    const [displayInput, setDisplayInput] = useState(false)

    const switchInputDisplay = () => displayInput? inputStyles.active : inputStyles.hidden

    const switchSearchbarColor = () => displayInput? searchbarStyles.active : searchbarStyles.hidden

    return (
        <nav className='secondary-glass flex justify-between items-center p-4'>

            <div id='logo-container' className='md:ml-10 sm:ml-8 ml-4'>
                <img src='https://raw.githubusercontent.com/VitorMendonca62/biblioteca-etepam/main/public/assets/img/etepam-logo-fechada.png' alt="logo" className='w-7/12'/>
            </div>

            <div id='icons-bar' className='flex justify-end md:mr-8 sm:mr-6 space-x-6 mr-2 w-2/3'>

                <div id='search-bar' className={'flex rounded-3xl p-1 space-x-4 text-gray-100 md:mr-[5vh] lg:mr-[20vh] xl:mr-[30vh] ' + switchSearchbarColor()}
                onMouseLeave={() => setDisplayInput(false)} >

                    <button className='text-gray-100 hover:text-gray-900 hover:bg-gray-100 hover:opacity-25 sm:p-3 rounded-full'
                    onClick={() => setDisplayInput(true)}>
                        <FaSistrix />
                    </button>

                    <input type='text' placeholder='Procure um livro' id='input-search' className={'sm:inline outline-none bg-transparent w-10/12 sm:pr-20 md:pr-28 lg:pr-44 ' + switchInputDisplay()} />
                </div>

                <button className="text-gray-100 hover:text-gray-900 hover:bg-gray-100 hover:opacity-25 sm:px-4 rounded-full">
                    <FaHeart />
                </button>

                <button className="text-gray-100 hover:text-gray-900 hover:bg-gray-100 hover:opacity-25 sm:px-4 rounded-full">
                    <FaUser />
                </button>
            </div> 
        </nav>
    )
}