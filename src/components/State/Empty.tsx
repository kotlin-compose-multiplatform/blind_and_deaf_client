import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {Stack, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import Spacer from "../Common/Spacer";

const Empty = () => {
    const {t}=useTranslation();
  return (
    <Stack alignItems={'center'} justifyContent='center' sx={{width:'100%',height:'50vh',mb:10}}>
        <Player src={'/images/nodata.json'} style={{width:'250px'}} autoplay loop/>
        <Typography>{t('nodata')}</Typography>

    </Stack>
  )
}

export default Empty