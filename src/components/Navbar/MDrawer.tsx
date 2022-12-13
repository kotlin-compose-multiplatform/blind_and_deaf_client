import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import MenuIcon from "@mui/icons-material/Menu";
import {Badge, Box, Card, CardActionArea, Menu, MenuItem, Stack} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Fonts} from "../../common/theme";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import Navbar from "./Navbar";
import Spacer from "../Common/Spacer";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="right" ref={ref} {...props} />;
});

export default function MDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const style={
        p:2,
        backdropFilter:'blur(10px)',
        backgroundColor:'rgba(255,255,255,0.65)',
        zIndex:2
    };

    const {t} = useTranslation();
    const navigator=useNavigate()

    return (
        <div>
                <Card sx={{backgroundColor:'primary.main'}} onClick={handleClickOpen}>
                    <CardActionArea sx={{p:0.6}}>
                        <img src={'/images/menu.svg'}/>
                    </CardActionArea>
                </Card>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <Box sx={{p:3}}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography sx={{fontFamily:Fonts.AppBold,color:'secondary.main',fontSize:'24px'}}>
                            {t('menu')}
                        </Typography>
                        <IconButton
                            sx={{backgroundColor:'primary.main',borderRadius:'6px',color:'white'}}
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </Box>
                <Navbar direction={'column'} onClose={handleClose}/>
            </Dialog>
        </div>
    );
}
