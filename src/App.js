import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/layout/navBar/navBar";
import SideBar from "./components/layout/sidebar/sideBar";
import Order from "./components/pages/order";
import Home from "./components/pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "175px",
            height: "92.35vh",
            backgroundColor: "white",
          }}
        >
          <SideBar />
        </div>
        <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
