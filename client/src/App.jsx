import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Appliances, BabyKids, BeddingBath, DecorPillow, Furniture, Holiday, HomeImprovement, Kitchen, Lighting, Organization, Outdoor, Pet, Rugs, Sale, ShopByRoom, Login} from "./Pages";
import { NavBar } from "./Components";
import "./App.css";

const MaybeShowNavbar = ({showNavbar, setShowNavbar, children}) => {
  const location = useLocation();


  useEffect(() => {
    if (location.pathname === '/') {
      setShowNavbar(true);
    }
    else {
      setShowNavbar(false);
    }
  }, [location])

  return (
    <div>{showNavbar && children}</div>
  )
}


function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <Router>
      <div className="App">
        <MaybeShowNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar}>
          <NavBar/>
        </MaybeShowNavbar>
        <div className={showNavbar ? 'content' : 'normalFlow'}>
          <Routes>
            <Route exact path="/" element={<Sale/>} />
            <Route path="/Appliances" element={<Appliances />} />
            <Route path="/BabyKids" element={<BabyKids/>} />
            <Route path="/BeddingBath" element={<BeddingBath />} />
            <Route path="/DecorPillow" element={<DecorPillow />} />
            <Route path="/Furniture" element={<Furniture/>} />
            <Route path="/Holiday" element={<Holiday />} />
            <Route path="/HomeImprovement" element={<HomeImprovement />} />
            <Route path="/Kitchen" element={<Kitchen/>} />
            <Route path="/Lighting" element={<Lighting />} />
            <Route path="/Organization" element={<Organization />} />
            <Route path="/Outdoor" element={<Outdoor/>} />
            <Route path="/Pet" element={<Pet />} />
            <Route path="/Rugs" element={<Rugs />} />
            <Route path="/Sale" element={<Sale/>} />
            <Route path="/ShopByRoom" element={<ShopByRoom />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
