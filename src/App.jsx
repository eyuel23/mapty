import "./App.css";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";

function App() {
  return (
    <>
      <div className="all">
        <Sidebar />
        <Map />
      </div>
    </>
  );
}

export default App;
