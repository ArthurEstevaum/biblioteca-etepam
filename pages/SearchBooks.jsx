import NavBar from "../components/NavBar";
import Head from "next/head";

export default function SearchBooks() {
    <>
        <Head>
            <title>Biblioteca ETEPAM</title>       
        </Head>
        <div id="container" className='h-full bg-cover' style={{backgroundImage: 'url(/background.png)'}}>
            <NavBar />
            <main>

            </main>
        </div>
    </>
}

export async function getStaticProps() {
    
}