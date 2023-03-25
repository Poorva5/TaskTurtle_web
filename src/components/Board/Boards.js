import React, { useEffect } from 'react';
import Board from './Board';
import { fetchBoardList } from '../../store/board';  
import { useDispatch, useSelector } from 'react-redux';
import { styled } from "@mui/material";
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";
import { createBoard } from '../../store/board';
import * as yup from "yup";


const AddBoardButton = styled('button')(() => ({
    border: 'none',
    width: '200px', 
    height: '100px',
    backgroundColor: '#091e420a',
    cursor: 'pointer'
}))

const ButtonText = styled('p')(() => ({
    fontSize: '14px',
    color: '#172B4D',
    cursor: 'pointer'
}))

const StyledInputDiv = styled('div')(() => ({
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '15px',
    marginTop: '-10px',    
}));

const CreateBoardButton = styled('button')(() => ({
    border: 'none',
    color: '#172B4D',
    marginLeft: '15px',
    padding: '10px 105px',
    marginBottom: '20px',
    cursor: 'pointer'
}));

const schema = yup.object().shape({
    title: yup.string(),
})


const renderBoardList = (boardList) => {
    return (
        <>
            {boardList.map((board, index) => (
                <Board key={board.id} index={index} board={board}/>
            ))}
        </>
    )
}

const Boards = () => {
    const { control, handleSubmit, setValue, formState: {errors}, } = useForm({
        resolver: yupResolver(schema)
    })
    const dispatch = useDispatch();
    const { boardList } = useSelector(state => state.board);

    const onSubmit = data => {
        dispatch(createBoard(data))
        setValue("title", '')
    }

    useEffect(() => {
        dispatch(fetchBoardList())
    }, [dispatch])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {renderBoardList(boardList)}
           <AddBoardButton onClick={handleClick('right')}>
                <ButtonText>Create New Board</ButtonText>
           </AddBoardButton>
           
           <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <Paper sx={{ml:1, minWidth: '280px'}}>
                    
                        <Typography sx={{ textAlign: 'center', color: '#5E6C84', pt: 2 }}>Create Board</Typography>
                        
                        <Typography sx={{ p: 2, fontSize: '12px', fontWeight: 600, color: '#5E6C84' }}>Board title</Typography>
                    
                        <StyledInputDiv>
                            <Controller
                                name="title"
                                control={control}
                                render={({ field }) => <TextField
                                    type="title"
                                    fullWidth
                                    {...field}
                                    size="small"
                                    value={field.value}
                                    error={!!errors.title}
                                    helperText={errors.title ? errors.title?.message : ""}
                                    sx={{
                                        "& legend": { display: "none" },
                                        "& fieldset": { top: 0 },
                                    }}
                                />}
                            />
                        </StyledInputDiv>

                        <CreateBoardButton>
                            Create
                        </CreateBoardButton>
                    </Paper>
                </form>
            </Fade>
        )}
      </Popper>
        </div>

    )
}

export default Boards;