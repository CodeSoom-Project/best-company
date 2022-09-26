import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Companys from "./pages/home/Companys";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Companys />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
