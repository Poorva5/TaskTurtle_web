import React from 'react';
import { styled } from "@mui/material";
import Boards from '../components/Board/Boards';


const NavDiv = styled('div')(({theme}) => ({
  backgroundColor: '#6065D8',
  padding: '10px'
})); 

const HeadingBoard = styled('h2')(() => ({
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '24px',
  color: '#172b4d',
  textAlign: 'left'
}))

const BoardDiv = styled('div')(() => ({
  marginLeft: '300px',
  marginRight: '300px',
  paddingTop: '60px'
}))


const Home = () => {
  return (
    <div>
      <NavDiv>
        <p style={{color:'#FFF'}}>Navbar Will come here</p>
      </NavDiv>

      <BoardDiv>
        <HeadingBoard>Boards</HeadingBoard>
        <Boards/>
      </BoardDiv>
    </div>
  )
};

export default Home;
