import React from 'react';
import { styled } from "@mui/material";
import landing from '../Images/landing.png'

const GetStartedButton = styled('a')(({theme}) => ({
    background: '#476eec',
    padding: '15px 40px',
    color: '#FFFFFF',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 500,
    fontSize: '17px'
})); 

const LandingPage = () => {
    return (
        <div style={{backgroundColor: '#ecfff9', height: '100vh'}}>
            <div style={{ display: 'flex',flexDirection: 'row', margin: 'auto', paddingTop: '120px', justifyContent: 'center'}}> 
                <div>
                    <h1 style={{ color: '#111826', fontSize: '85px', fontFamily: '"Outfit", Sans-serif', fontWeight: 500, width: '520px', textAlign: 'left', lineHeight: '1.1 rem', letterSpacing: '-1.7px'}}>Organize your life with one tool</h1>
                    <div style={{ textAlign: 'left'}}><GetStartedButton href='/login'>Get Started</GetStartedButton></div>
                </div>
                <div><img src={landing} alt='landing page' height={452} width={560} ></img></div>
            </div>
        </div>  
    )
}

export default LandingPage; 