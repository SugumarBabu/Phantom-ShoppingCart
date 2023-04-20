import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Billing from "./components/Billing";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/cart" element={<Cart />} exact />
          <Route path="/payment" element={<Billing />} exact />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
