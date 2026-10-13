
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
export default function Header() {
  const navigate = useNavigate()

  function goSearch(e) {
    if(e.key === "Enter"){
      navigate(`/search/${e.target.value}`)
    }
  }

  return (
    <div>



    <div className="meal-container">
      {/* Навигация (Header) */}
      <header className="meal-header">
        <div className="logo-container">
          <img src="https://www.themealdb.com/images/logo.svg" alt="TheMealDB Logo" className="logo" />
        </div>
        <nav className="nav-buttons">
          <Link to={"/"}>
          <button className="nav-btn">Home</button>
          </Link>
          <button className="nav-btn">API</button>
          <input type="text" placeholder='search' onKeyDown={goSearch}/>
        </nav>
      </header>

      {/* Негизги бөлүм (Hero Section) */}
      {/* <section className="hero-section">
        <div className="side-icon left-icon">
          <img src="https://www.themealdb.com/images/meal-icon.png" alt="Meal Icon Left" />
        </div>

        <div className="hero-content">
          <h1>Welcome to TheMealDB</h1>
          <h3>
            Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world. <br />
            We offer a <span className="highlight">free recipe API</span> for anyone wanting to use it, with additional premium features if required.
          </h3>
          
          <div className="action-buttons">
            <button className="btn btn-free">Free API</button>
            <button className="btn btn-premium">Go Premium</button>
          </div>

          <p className="subtitle">
            Click above to upgrade the free Recipe API to premium for <span className="highlight-price">$10 lifetime one-off</span> <br />
            <strong>293 premium supporters.</strong>
          </p>
        </div>

        <div className="side-icon right-icon">
          <img src="https://www.themealdb.com/images/meal-icon.png" alt="Meal Icon Right" />
        </div>
      </section> */}
    </div>
    </div>
  )
}
