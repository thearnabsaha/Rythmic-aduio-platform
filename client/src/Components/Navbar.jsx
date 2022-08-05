// in navbar.jsx

import React from 'react'
import {Link} from 'react-router-dom'
import { SiAudiomack } from "react-icons/si";
const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/"><SiAudiomack/>Rhythmic</Link>
        {/* <Link to="/cart">Cart</Link> */}
      </div>
    </div>
  )
}

export default Navbar

