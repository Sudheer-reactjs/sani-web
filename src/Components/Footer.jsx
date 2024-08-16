import React from 'react'
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="grid grid-cols-[1fr, 645px] gap-4">
           <div className=''>
           <Link to="/"> 
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
        </div>
     </footer>
    </>
  )
}
