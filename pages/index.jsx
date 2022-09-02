import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import backgroundImage from '../public/background.png'
import CarouselTest from '../components/CarouselTest'

export default function Home() {
    return (
        <div id="container" className='h-full bg-cover' style={{backgroundImage: 'url(/background.png)'}}>
                <NavBar />
                <main>
                    <section className='bg-cover h-screen'
                    style={{backgroundImage: 'url(/etepam-background.png)'}}><h1 className='text-center text-white text-2xl'>Teste</h1></section> 
                    <section className='primary-glass'>
                        <h1 className='text-lg text-gray-100 text-center pt-[10vh]'>Recomendados</h1>
                        <CarouselTest />
                        <h1 className='text-lg text-gray-100 text-center pt-[5vh]'>Finanças</h1>
                        <CarouselTest />
                    </section>  
                </main>
        </div>
    )
}