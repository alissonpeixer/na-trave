import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import App  from './app'
import './global.css'




ReactDOM.render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
