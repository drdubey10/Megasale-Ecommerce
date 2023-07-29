import React from "react"
import { Box, Typography, Menu, MenuItem,styled } from "@mui/material"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Logout = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    marginLeft: '20px',
  }));

const Component = styled(Menu)(({ theme }) => ({
    marginTop: '6px',
  }));

const Profile = ({ account ,setAccount}) => {

    const[open,setOpen] = React.useState(false);
    const handleClick =(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    const logoutUser = ()=>{
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick} style ={{cursor: 'pointer'}}>
                <Typography style={{ color: "black", marginTop: '6px',marginLeft: "50px", fontSize: '16px', fontWeight: 'bold' }}>{account}</Typography>
                <Component 
                    anchorEl={open}
                    open={Boolean(open)} 
                    onClose={handleClose}
                >
                    <MenuItem onClick={()=>{ handleClose(); logoutUser();}}><PowerSettingsNewIcon fontSize="small"/><Logout>Logout</Logout></MenuItem>
                </Component>
            </Box>
        </>
    )
}
export default Profile