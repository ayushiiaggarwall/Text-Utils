import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };  

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled!", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#101010";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled!", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
    <Navbar
        appName="Text Utils"
        mode={mode}
        capitalize={capitalize}
        toggleMode={toggleMode}
      />
    <Alert alert={alert} capitalize={capitalize} />
    <About mode={mode} />
    <TextForm
          heading="Input Text Area"
          mode={mode}
          showAlert={showAlert}
          />
          </>
    // <Router>
    //   <Navbar
    //     appName="Text Utils"
    //     mode={mode}
    //     capitalize={capitalize}
    //     toggleMode={toggleMode}
    //   />
    //     <Alert alert={alert} capitalize={capitalize} />
    //   <Routes>

    //     <Route exact path="/about" element={<About mode={mode} />}/>

    //     <Route exact path="/" element={<TextForm
    //         heading="Input Text Area"
    //         mode={mode}
    //         showAlert={showAlert}
    //         />} />

    //   </Routes>
    // </Router>
  );
}

export default App;