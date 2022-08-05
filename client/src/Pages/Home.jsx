import React from 'react'
import Card from '../Components/Card'
import { BsArrowRight } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { SiAudiomack } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Card>
            <h1><SiAudiomack/>Welcome to Rhythmic</h1>
            <p>Welcome to the Rhythmic! Here you find many rooms according to your interests. In rooms you can talk fun and share memories with your friends!</p>
            <button onClick={()=>{navigate("/signup")}}>Get Your Username <BsArrowRight/> </button>
            <h2>Already Have a account? <span><Link to="/signin">Sign In</Link></span></h2>
        </Card>
    </div>
  )
}

export default Home

