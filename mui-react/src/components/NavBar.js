import React from "react";
import './NavBar.css'

export default function NavBar(){
    return(
        <nav className="navbar">
            <div>
        <a href="www.google.com">
            <img className="logo" src="https://www.bhaktaspirits.com/_next/image?url=%2Fassets%2Flogo-bhakta.png&w=384&q=75" alt="Bhakta Logo"/>
        </a>
            </div>
           <div className="buy-online">BUY BARREL 23</div> 
        </nav>
    )
}