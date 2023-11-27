import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex gap-5 uppercase  text-4xl">
      <Link to={`awakening`}>Awakening</Link>
      <Link to={`tempering`}>Tempering</Link>
    </div>
  );
}

export default App;
