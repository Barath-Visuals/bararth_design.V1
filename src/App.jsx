import { useState } from 'react'
import Header from "./components/header.jsx";
import LeftContent from './pages/leftcomponent.jsx';
import CenterComponent from "./pages/centerComponent.jsx";
import UIUXComponent from './pages/UIUXComponent.jsx';
import RightComponent from './pages/rightcomponent.jsx';
import Footer from './components/footer.jsx';
import './App.css'

function App() {

  return (
    <>
      <div className="mains">
        <Header/>
        <div className='sub_mains'>
          <LeftContent/>
          <CenterComponent/>
          <UIUXComponent/>
          <RightComponent/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
