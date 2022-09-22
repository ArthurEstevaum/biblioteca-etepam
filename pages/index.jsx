import NavBar from '../components/NavBar'
import backgroundImage from '../public/background.png'
import HeaderHome from '../components/HeaderHome'
import BookCatalog from '../components/BookCatalog'
import Head from 'next/head'
import Layout from '../components/Layout'


export default function Home(data) {
    return (
        <main>
            <HeaderHome />
            <BookCatalog books={data.books} />
        </main>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/books')
    const books = await res.json()
    return {
        props: {books}
    }
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}