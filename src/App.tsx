import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex gap-5 uppercase text-4xl">
      <Link
        to={`awakening`}
        className="text-blue-500 hover:text-blue-700 transition duration-300"
      >
        Awakening
      </Link>
      <Link
        to={`tempering`}
        className="text-green-500 hover:text-green-700 transition duration-300"
      >
        Tempering
      </Link>
      <Link
        to={`regrading`}
        className="text-yellow-500 hover:text-green-700 transition duration-300"
      >
        Regrading
      </Link>
    </div>
  );
}

export default App;
