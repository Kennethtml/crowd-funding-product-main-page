import logo from "./logo.svg";
import "./App.css";
import { useEffect,useState ,useContext} from "react";
import Heading from "./components/Heading/Heading";
import Stats from "./components/Stats components/Stats";
import About from "./components/About component/About";

import Header from "./components/Header component/Header";
import Modal from "./components/Modal component/Modal";
import SelectionModal from "./components/selections modal/SelectionsModal";
import SuccessModal from "./components/Success modal/SuccessModal";
import { ModalContext } from "./components/context/ModalContext";

function App() {
  const{isModalOpen,successModalOpen}=useContext(ModalContext)
  return (
    <div className="container">
      {isModalOpen && <SelectionModal />}
      {successModalOpen && <SuccessModal />}
      <Header />
      <main>
        <Heading />
        <Stats />
        <About />
      </main>
    </div>
  );





 return
}

export default App;
