export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      {/* <div class="container-fluid"> */}
      <a href="/" className="navbar-brand">
        <div className="navbar-logo-container">
          <img
            src="/icon-mealplanner.png"
            id="navbar-logo"
            alt=""
            className="img-fluid"
          />
        </div>
      </a>

    {/* hamburger button for small screens */}
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarResponsive" 
      aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>

       <div className="collapse navbar-collapse" id="navbarNav">
         <div className="navbar-nav">
             <a href="/" className="nav-item nav-link">Home</a>
          
             <a href="/see-all" className="nav-item nav-link">All Plans</a>

             <a href="/see-all" className="nav-item nav-link">All Dishes</a>

             <a href="/see-all" className="nav-item nav-link">All Categories</a>

             <a href="/add-new" className="nav-item nav-link">Add Meal Plan</a>

             <a href="/add-new" className="nav-item nav-link">Add Dish</a>

             <a href="/add-new" className="nav-item nav-link">Add Category</a>

         </div>
       </div>
     </nav>
  );
}
