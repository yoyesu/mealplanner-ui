
//import LegacyAndStarterResultsContainer from "./LegacyAndStarterResultsContainer";

export default function ShowAllContainer() {
  //this is to store our inputs


  return (
    <div className="starter-household-component">


    {isShown && (
        <LegacyAndStarterResultsContainer
          difficulty={difficulty}
          lifespan={lifespan}
          numberOfSims={numberOfSims}
          isLegacy={true}
        />
      )}

{showRestart && <input type="submit" value="Restart" className="btn btn-light" onClick={handleRestart}></input>}
    </div>
  );
}
