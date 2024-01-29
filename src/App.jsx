import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import NavHeader from "./components/NavHeader";
import FormsInput from "./components/FormsInput";
import Descriptions from "./components/Descriptions";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <NavHeader></NavHeader>
        <FormsInput></FormsInput>
        <Descriptions></Descriptions>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
