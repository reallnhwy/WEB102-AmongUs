import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCrewmate from './pages/CreateCrewmate.jsx'
import Gallery from './pages/Gallery.jsx';
import EditCrewmate from './pages/EditCrewmate.jsx';
import Info from './pages/Info.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index={true} path="/" element={<App />} />
          <Route index={false} path="/create" element={<CreateCrewmate/>} />
          <Route index={true} path="/gallery" element={<Gallery/>}/>
          <Route index={false} path="/edit/:id" element={<EditCrewmate/>}/>
          <Route index={false} path="/info/:id" element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
