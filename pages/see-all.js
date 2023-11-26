import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ShowAllContainer from '../components/show-all-container/show-all-container'
import { useState } from "react";

export default function SeeAll() {

   const [lifespan, setLifespan] = useState("-1");
   const handleLifespan = (event) => {
      event.preventDefault();
      setLifespan(event.target.value);
   };
  const [difficulty, setDifficulty] = useState("-1");

  const [isShown, setIsShown] = useState(false);
  const [numberOfSims, setNumberOfSims] = useState("-1");
  const [showRestart,setShowRestart] = useState(false);


  function handleRestart(e) {
    e.preventDefault();
    setIsShown(false);
    setShowRestart(false);
    document.getElementById("config-panel").classList.remove("invisible");
  };
  const handleDifficulty = (event) => {
    event.preventDefault();
    setDifficulty(event.target.value);
  };


  const handleNumberOfSims = (event) => {
    event.preventDefault();
    setNumberOfSims(event.target.value);
  };
    function handleSubmit(e) {
        e.preventDefault();
        setIsShown(true);
        setShowRestart(true);
        document.getElementById("config-panel").classList.add("invisible");
    };
    return (
      <>
      <Head>
        <title>Meal Planner</title>
        <meta name="description" content="Add description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon-mealplanner.png" />
      </Head>
      <header>
          <Navbar/>
      </header>
      <main className="main-container d-flex align-items-center flex-column">

        <form id="config-panel" action="#" method="post" onSubmit={handleSubmit} className="container">
        <div className="row align-items-center">

        <div id="lifespan-config" className="dropdown col col-md-3">
          <label htmlFor="lifespan-sim">
            Choose what to show:
            <select value={lifespan} onChange={handleLifespan} className="form-select">
              <option value="0">Meal Plans</option>
              <option value="1">Dishes</option>
              <option value="2">Categories</option>
            </select>
          </label>
        </div>
        </div>

        <div className="row align-items-center">
            <div className="col">
          <input type="submit" value="Get All" className="btn btn-light"></input>
            </div>
        </div>

    </form>
        
      </main>
      <Footer/>
      </>
    )
}