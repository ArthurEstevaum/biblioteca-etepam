import NavBar from '../components/NavBar'
import backgroundImage from '../public/background.png'
import HeaderHome from '../components/HeaderHome'
import BookCatalog from '../components/BookCatalog'
import Head from 'next/head'


export default function Home() {
    return (
        <>
            <Head>
                <title>Biblioteca ETEPAM</title>
                       
            </Head>
            <div id="container" className='h-full bg-cover' style={{backgroundImage: 'url(/background.png)'}}>
                    <NavBar />
                    <main>
                        <HeaderHome />
                        <BookCatalog />
                    </main>
            </div>
        </>
    )
}