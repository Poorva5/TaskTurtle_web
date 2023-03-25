import Box from '@mui/material/Box';
import { styled } from "@mui/material";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpUser } from '../../store/auth';
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const StyledFormGroup = styled("div")`
  width: 100% ;
  margin: 0px auto 20px auto;
  text-align: left; 
`

export const StyledLabel = styled('label')`
  font-weight: 300 !important;
  font-size: 14px;
  line-height: 21px;
  color: #2D2D2D;
`

export const StyledAsterisk = styled('span')`
  font-size: 12px;
  color: red;
`

export const StyledButton = styled('button')(({ theme, color = "#6065D8" }) => ({
    backgroundColor: color,
    width: '100%',
    height: 50,
    borderRadius: '8px',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
    alignItems: 'center',
    paddingRight: '10px',
  }));
  

const schema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email().required(),
    password1: yup.string().required(),
    password2: yup.string().required()
})

const SignUpForm = () => {

    const { control, handleSubmit, formState: { errors },} = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch()

    const onSubmit = data => {
        const formData = {
            email: data['email'],
            username: data['username'],
            password1: data['password1'],
            password2: data['password2']
        }
        dispatch(SignUpUser(formData))
    }

    const { isLoading } = useSelector((state) => state.auth);

    return (
        <Box sx={style}>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <h3 style={{ fontFamily: "Open Sans, sans-serif" }}>Sign Up</h3>
                <StyledFormGroup>
                <StyledLabel htmlFor="username">
                    Username <StyledAsterisk className="text-alert">*</StyledAsterisk>
                </StyledLabel> 
                <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField
                type="text"
                fullWidth
                {...field}
                placeholder={"Enter your username"}
                size="small"
                value={field.value}
                error={!!errors.username}
                helperText={errors.username ? errors.username?.message : ""}
                sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                />}
                />
                </StyledFormGroup>
                <StyledFormGroup>    
                <StyledLabel htmlFor="email">
                    Email <StyledAsterisk className="text-alert">*</StyledAsterisk>
                </StyledLabel>

                <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField
                type="email"
                fullWidth
                {...field}
                placeholder={"Enter Email here"}
                size="small"
                value={field.value}
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ""}
                sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                />}
                />
                </StyledFormGroup>

                <StyledFormGroup>
                    <StyledLabel htmlFor="password">
                        Password <StyledAsterisk className="text-alert">*</StyledAsterisk>
                    </StyledLabel>

                    <Controller
                        name="password1"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                type="password"
                                fullWidth
                                {...field}
                                placeholder={"Enter password here"}
                                size="small"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password?.message : ""}
                                value={field.value}
                                sx={{
                                    "& legend": { display: "none" },
                                    "& fieldset": { top: 0 },
                                }}
                            />
                        )}
                    />
                </StyledFormGroup>
                    
                <StyledFormGroup>

                <StyledLabel htmlFor="password">
                        Confirm Password <StyledAsterisk className="text-alert">*</StyledAsterisk>
                    </StyledLabel>

                    <Controller
                        name="password2"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                type="password"
                                fullWidth
                                {...field}
                                placeholder={"Confirm your password"}
                                size="small"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password?.message : ""}
                                value={field.value}
                                sx={{
                                    "& legend": { display: "none" },
                                    "& fieldset": { top: 0 },
                                }}
                            />
                        )}
                    />
                </StyledFormGroup>

                <StyledButton>
                    {isLoading ? <CircularProgress sx={{ color: "#fff" }} /> : "Sign Up"}
                </StyledButton>
                </form>
            </div>
        </Box>  
    )
}


export default SignUpForm;