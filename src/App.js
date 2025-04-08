import "./App.css";
import Contact from "./Pages/Contacts/Contact";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Training from "./Pages/Training/Training";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Training />} />
          <Route path="/" element={<Pricing />} />
          <Route path="/" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
