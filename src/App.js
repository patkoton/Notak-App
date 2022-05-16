import React from "react"
import Info from "./components/InfoSP"
import About from "./components/AboutSP"
import Interest from "./components/InterestSP"
import Footer from "./components/FooterSP"
import "./solop.css";


export default function App() {
    return (
      <div className="card">
        <div className='incard'>
          <Info />
          <About />
          <Interest />
          <Footer />
        </div>
      </div>
    )
  }
  
