import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit';
import reportWebVitals from './reportWebVitals';
import Blood_Test_form from "./Blood_Test_form.js";
import X_Ray_form from "./X_Ray_form.js";
import Personal_Information_form from "./Personal_Information_form.js";
// import nav from "./nav.js"

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<nav />} /> */}
        <Route path="/X_Ray_form" element={<X_Ray_form />}/>
        <Route path="/Blood_Test_form" element={<Blood_Test_form />}/>
        <Route path="/Personal_Information_form" element={<Personal_Information_form />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
