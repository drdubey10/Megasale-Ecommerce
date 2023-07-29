
import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";

function Card(props) {
  const [open, setopen] = useState(false);

  function hovOn() {
    setopen(true);
  }
  function hovOff(){
    setopen(false)
  }
  return (
    <Box onMouseEnter={hovOn} onMouseLeave ={hovOff}>
      <img src={props.linkforimage} alt="Cardim" style={{ height: '64px', width: '64px', transform: open ? 'scale(1.5,1.5)' : 'none' }} />
      <Typography style={{ fontWeight: 'bold', fontSize: '14px' , opacity: open ? '0' : '1'}}>{props.title}</Typography>
    </Box>
  );
}

export default Card;
