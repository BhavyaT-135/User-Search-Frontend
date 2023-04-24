import Home from '../src/components/Home/Home'
import Brand from '../src/components/Brand/Brand'
import Cities from '../src/components/Cities/Cities'
import Income from '../src/components/Income/Income'
import Name from '../src/components/Name/Name'
import Price from '../src/components/Price/Price'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/income" element={<Income />} />
        <Route path="/name" element={<Name />} />
        <Route path="/price" element={<Price />} />
    </Routes>
  </Router>
  );
}

export default App;
