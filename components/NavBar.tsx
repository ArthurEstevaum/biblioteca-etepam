import React, { DetailedHTMLProps, PropsWithChildren, useState } from 'react'
import { FaSistrix, FaHeart, FaUser } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import logoFechada from '../public/etepam-logo-fechada.png'
import Logo from '../public/etepam-logo-lg.svg'
import { NextPage } from 'next'
import { HandleInputValue } from './Layout'

const NavBar: NextPage = ({handleInputValue}: HandleInputValue) => {
    const inputStyles = {
        hidden: 'hidden',
        active: 'inline'
    }

    const searchbarStyles = {
        hidden: 'primary-glass-screens sm:opacity-70 ',
        active: 'primary-glass-screens sm:opacity-70 primary-glass opacity-70'
    }

    const [displayInput, setDisplayInput] = useState(false)

    const switchInputDisplay = () => displayInput? inputStyles.active : inputStyles.hidden

    const switchSearchbarColor = () => displayInput? searchbarStyles.active : searchbarStyles.hidden

    return (
        <nav className='secondary-glass sticky top-0 z-10 flex justify-between items-center p-4 border-b-[1px] border-gray-600'>

            <Link href='/'>
                <div id='logo-container' className='md:ml-10 sm:ml-8 ml-4 cursor-pointer'>
                    <Logo className='hidden lg:block' />
                    <div className='w-7/12 block lg:hidden relative'>
                        <Image src="https://res.cloudinary.com/dt1vs4u72/image/upload/v1667547452/etepam-logo-fechada_xzxqpn.png" alt="logo" width={58} height={63}/>
                    </div>
                </div>
            </Link>

            <div id='icons-bar' className='flex justify-end md:mr-8 sm:mr-6 space-x-6 mr-2 w-2/3'>

                <div id='search-bar' className={'flex rounded-3xl p-1 space-x-4 text-gray-100 md:mr-[5vh] lg:mr-[20vh] xl:mr-[30vh] sm:w-9/12 border-[1px] border-transparent focus-within:border-neutral-100/75 transition ease-linear delay-75 duration-300 ' + switchSearchbarColor()}
                onMouseLeave={() => setDisplayInput(false)} >

                    <Link href={`/SearchBooks`}>
                        <button className='text-gray-100 hover:text-gray-900 hover:bg-gray-100 hover:opacity-25 sm:p-3 rounded-full transition duration-500 ease-in-out'
                        onClick={() => setDisplayInput(true)}>
                            <FaSistrix />
                        </button>
                    </Link>

                    <input type='text' autoComplete='on' placeholder='Procure um livro' id='input-search' className={'sm:inline outline-none bg-transparent w-10/12  ' + switchInputDisplay()} 
                    onChange={handleInputValue} />
                </div>

                <button className="text-gray-100 hover:text-gray-900 hover:bg-gray-100 hover:opacity-25 sm:px-4 rounded-full transition duration-500 ease-in-out">
                    <FaHeart />
                </button>

                <button className="text-gray-100 hover:text-gray-900 hover:bg-gray-100 hover:opacity-25 sm:px-4 rounded-full transition duration-500 ease-in-out">
                    <FaUser />
                </button>
            </div> 
        </nav>
    )
}

export default NavBar