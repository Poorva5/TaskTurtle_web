import React from 'react';
import { styled } from "@mui/material";
import boardImg1 from '../../Images/boardImg1.jpg'
import { useNavigate } from 'react-router-dom';
  
  
const CardDiv = styled('div')(() => ({
    width: '200px',
    height: '100px',
    backgroundImage: `url(${boardImg1})`,
    backgroundSize: 'cover',
    borderRadius: '4px',
    marginRight: '15px',
    marginBottom: '10px',
    cursor: 'pointer'
}))

const BoardTitle = styled('h3')(() => ({
    color: 'white',
    textAlign: 'left',
    paddingLeft: '8px'
}))

const Board = ({ board: {title, image }}) => {
    console.log(title)
    const navigate = useNavigate();

    return (
        <CardDiv onClick={() => {navigate()}}>
            <BoardTitle>{title}</BoardTitle>
        </CardDiv>
    )
}

export default Board;