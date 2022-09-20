import NavBar from '../components/NavBar'
import backgroundImage from '../public/background.png'
import HeaderHome from '../components/HeaderHome'
import BookCatalog from '../components/BookCatalog'
import Head from 'next/head'


export default function Home(data) {
    return (
        <>
            <Head>
                <title>Biblioteca ETEPAM</title>       
            </Head>
            <div id="container" className='h-full bg-cover' style={{backgroundImage: 'url(/background.png)'}}>
                    <NavBar />
                    <main>
                        <HeaderHome />
                        <BookCatalog books={data.books} />
                    </main>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/books')
    const books = await res.json()
    return {
        props: {books}
    }
}