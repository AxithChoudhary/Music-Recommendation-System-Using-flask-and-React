import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Recommend from "./recommend";
import About from "./About";
import Nav from "./navbar";
import Foot from "./foot";

function App(){
    return(
      <BrowserRouter>
      <Nav />
      <Routes>
          <Route path="Recommend" element={<Recommend />} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Landing />}>
        </Route>
      </Routes>
      <Foot />
      </BrowserRouter>
    );
}

export default App;

