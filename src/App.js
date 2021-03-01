import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import ProjectRoute from "./routing/ProjectRoute";



function App() {
  return (
      <BrowserRouter>
          <ProjectRoute></ProjectRoute>
      </BrowserRouter>
  );
}

export default App;
