import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Stack } from "@mui/material";

const Loading = () => {
  return (
    <Stack alignItems={'center'} justifyContent='center' sx={{width:'100%',height:'80vh'}}>
        <Player src={'/images/final.json'} style={{width:'150px'}} autoplay loop/>
        
    </Stack>
  )
}

export default Loading