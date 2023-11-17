import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import StarterHouseholdForm from '../components/starter-legacy/starterHousehold-form'

export default function StarterHousehold() {
    return (
      <>
      <Head>
        <title>Mealplanner: All plans</title>
        <meta name="description" content="My meal planner for a healthier life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon-mealplanner.png" />
      </Head>
      
      <header>
          <Navbar/>
        </header>
      <main className="main-container d-flex align-items-center flex-column">
        

        <h1>Meal Plans</h1>

        <StarterHouseholdForm/>
      </main>
      <Footer/>
      </>
    )
}