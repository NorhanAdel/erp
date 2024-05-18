import logo from "./logo.svg";
import "./App.css";
import Details from "./components/Details/Details";
import Activities from "./components/Activities/Activities";
import { Route, Routes } from "react-router";
import { AddAgent, Login } from "./Page";
import VoiceNotes from "./components/Voicenote/Voicenote";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div dir="rtl">
      <Routes>
        <Route path="activites" element={<Activities />} />
        <Route path="details" element={<Details />} />
        <Route path="login" element={<Login />} />
        <Route path="addagent" element={<AddAgent />} />
        <Route path="voice" element={<VoiceNotes />} />
      </Routes>
    </div>
  );
}

export default App;
