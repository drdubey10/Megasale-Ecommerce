

import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {Authenticatesignup , AuthenticateLogin} from '../../service/api.js'
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

const LoginWrapper = styled(Box)({
    height: '50vh',
    width: '50vh',
    textAlign: 'center',
    padding: '90px',
    justifyContent: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',



})
const Error = styled(Typography)({
color: 'red',
fontSize: '10px',
lineHeight : '0px',
marginTop : '10px'
})

const LoginButtonInDialog = styled(Button)({
    marginTop: '30px'
})

const whatToShow = {
    login: {
        view: 'login'
    },
    signup: {
        view: 'signup'
    }
}
const signupFormData = {
    fullName: '',
    emailSignup: '',
    passwordSignup: ''

}
const loginIntialValues ={
    emailSignup:'',
    passwordSignup: ''
}

function LoginDialog({ loginClickStatus, changeLoginClickStatus }) {

    const [dialogshow, setDialogShow] = React.useState(whatToShow.login)
    const [SignupDataState, changeSignupData] = React.useState(signupFormData);
    const[login,setLogin] = React.useState(loginIntialValues);
    const[error, setError]= React.useState(false);
    const {setAccount} = useContext(DataContext);

    function signupForm(event) {

        changeSignupData({ ...SignupDataState, [event.target.name]: event.target.value })
        
    }

    function handleClick() {
        changeLoginClickStatus(false);
        setDialogShow(whatToShow.login)
        setError(false);

    }

    function viewChangeToSignup() {
        setDialogShow(whatToShow.signup)
    }
    function viewChangeToLogin() {
        setDialogShow(whatToShow.login)
    }
    async function signupClick() {
        let response = await Authenticatesignup(SignupDataState); 
        if (!response)  return; 
        handleClick();
        setAccount(SignupDataState.fullName);
    }

    const onValueChange= (event)=>{
        setLogin({...login,[event.target.name]: event.target.value})

    }
    const loginUser= async () =>{
      let response =  await AuthenticateLogin(login);
      console.log(response);
      if(response.status === 200){
        handleClick();
        setAccount(response.data.data.fullName);
      }else{
        setError(true);
      }
    }
    
    return (

        <Dialog open={loginClickStatus} onClose={handleClick}>

            {dialogshow.view === 'login' ?
                <LoginWrapper display={'flex'} flexDirection={'column'}>
                    <Typography style={{ marginBottom: '30px', fontSize: '40px', fontFamily: 'serif', fontWeight: 'bold' }}>Login</Typography>
                    <TextField id="username" label="Enter Email" onChange={onValueChange} name ='emailSignup'variant="standard" />
                   {
                    error && <Error>Please enter valid username or password.</Error>
                   } 
                    <TextField id="password" type="password" label="Enter Password" onChange={onValueChange} name ='passwordSignup' variant="standard" style={{ marginTop: '20px' }} />
                    <Typography style={{ marginTop: '30px', fontSize: '12px' }}>By continuing, you agree to Megasale's Terms of Use and Privacy Policy.</Typography>

                    <LoginButtonInDialog variant="contained" style={{background : "#FF2D00",color: "black",}} onClick={loginUser}>Login</LoginButtonInDialog>
                    <Typography style={{ marginTop: '30px', fontWeight: 'bold', cursor: 'pointer' }} onClick={viewChangeToSignup}>New to Megasale? Create an account</Typography>
                </LoginWrapper>

                :

                <LoginWrapper display={'flex'} flexDirection={'column'}>
                    <Typography style={{ marginBottom: '30px', fontSize: '40px', fontFamily: 'serif', fontWeight: 'bold' }}>SignUp</Typography>

                    <TextField id="FullName" label="Enter Fullname" variant="standard" onChange={signupForm} name='fullName' />
                    <TextField id="username" type="email" label="Enter Email" variant="standard" style={{ marginTop: '20px' }} onChange={signupForm} name='emailSignup' />
                    <TextField id="password" type="password" label="Enter Password" variant="standard" style={{ marginTop: '20px' }} onChange={signupForm} name='passwordSignup' />
                    <Typography style={{ marginTop: '30px', fontSize: '12px' }}>By continuing, you agree to Megasale's Terms of Use and Privacy Policy.</Typography>

                    <LoginButtonInDialog variant="contained" style={{background : "#FF2D00" ,color: "black",}} onClick={signupClick}>SignUp</LoginButtonInDialog>
                    <Typography style={{ marginTop: '30px', fontWeight: 'bold', cursor: 'pointer' }} onClick={viewChangeToLogin}>Existing User? Log in</Typography>
                </LoginWrapper>

            }



        </Dialog>
    )
}

export default LoginDialog;



