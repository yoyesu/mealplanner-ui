import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Randomizers from '../pages/randomizers-desc.json';
import RandomizerDescCard from '../components/randomizer-desc-card';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Meal Planner</title>
        <meta name="description" content="Plan your meals for the week" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        
        <link rel="icon" href="/icon-mealplanner.png" />
      </Head>
      
      <header>
        <Navbar/>
      </header>
      <main className="main-container">
      
        <div className='banner d-flex align-items-center flex-column'>

          <h1 className='fw-bold' id="h1-homepage">What are you going to eat <br/>this week?</h1>
          
          <div className='desc-cards-container d-flex justify-content-between flex-wrap'>
          {Randomizers.map((randomizer) => <RandomizerDescCard randomizer={randomizer}/>)}
          </div>
          

        </div>
       
      </main>
      <Footer/>
      
    </>
  )
}
