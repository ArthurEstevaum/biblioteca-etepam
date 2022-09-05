import NavBar from '../components/NavBar'
import backgroundImage from '../public/background.png'
import CarouselTest from '../components/Carousel'
import HeaderHome from '../components/HeaderHome'
import BookCatalog from '../components/BookCatalog'


export default function Home() {
    return (
        <div id="container" className='h-full bg-cover' style={{backgroundImage: 'url(/background.png)'}}>
                <NavBar />
                <main>
                    <HeaderHome />
                    <BookCatalog />
                </main>
        </div>
    )
}