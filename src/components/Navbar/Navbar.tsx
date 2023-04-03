import React, {useState, useEffect, useContext} from 'react';
import {Button, Card, CardActionArea, Container, IconButton, Menu, MenuItem, Paper, Stack} from "@mui/material";
import {useTranslation} from "react-i18next";
import {colors, Fonts} from "../../common/theme";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {AppContext} from "../../App";
import {useLocation, useNavigate} from "react-router-dom";
import MDrawer from "./MDrawer";




interface IProps{
    direction:'row'|'column',
    onClose?:()=>void
}





const Navbar:React.FC<IProps> = (props:IProps) => {
    const {isMobile,isBlind,changeBlind, changeLanguage, appLanguage}=useContext(AppContext);
    const activeStyle={
        color:props.direction==='row'?"secondary.main":"primary.main",
        textTransform:'none',
        fontFamily:Fonts.AppBold,
        fontSize:isBlind?'25px':props.direction==='row'?'16px':'20px'
    }

    const passiveStyle={
        color:colors.titleColor,
        textTransform:'none',
        fontFamily:Fonts.AppRegular,
        fontSize:isBlind?'25px':props.direction==='row'?'16px':'20px'
    }
    const location=useLocation();
    const {t}=useTranslation();

    const navigator=useNavigate();

    function changeRoute(path:string){
        navigator(path);
        if(props.onClose){
            props.onClose();
        }
    }



    const LanguageDropDown=()=>{
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        function changeLang(lang: string) {
            if(changeLanguage){
                changeLanguage(lang);
            }
            handleClose()
        }

        function getLanguageStr(){
            if(appLanguage==='en'){
                return 'English';
            } else if(appLanguage==='ru'){
                return 'Русский';
            }
            return 'Türkmen';
        }

        return(
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon/>}
                    sx={{...passiveStyle,color:colors.descriptionColor}}
                >
                    {
                        getLanguageStr()
                    }
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    disableScrollLock={true}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={()=>changeLang('tm')}>Türkmen</MenuItem>
                    <MenuItem onClick={()=>changeLang('en')}>English</MenuItem>
                    <MenuItem onClick={()=>changeLang('ru')}>Русский</MenuItem>
                </Menu>
            </div>
        )
    }


    const NewsDropDown=()=>{
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        return(
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon/>}
                    sx={location.pathname==='/news'?activeStyle:passiveStyle}
                >
                    {t('news')}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    disableScrollLock={true}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={()=>{
                        changeRoute('/news')
                        handleClose()
                    }}>Today news</MenuItem>
                    <MenuItem onClick={()=>{
                        changeRoute('/news')
                        handleClose()
                    }}>See all</MenuItem>
                </Menu>
            </div>
        )
    }


    return (
        <Paper elevation={0} sx={{
            borderRadius:'0',
            position:props.direction==='row'?'fixed':'relative',
            width:'100%',
            top:0,
            zIndex:9,
            pt:1,pb:1,boxShadow:props.direction==='row'?`0px 6px 8px rgba(139, 139, 139, 0.25)`:''}}>
            <Container>
                <Stack spacing={2} direction={props.direction} alignItems={props.direction==='column'?'flex-start':'center'} justifyContent={'space-between'}>
                    {
                        props.direction==='row' && !isBlind?
                            <img src={isMobile?'/images/mobile_logo.svg':'/images/Logo.svg'} style={{width:isMobile?'auto':'200px'}}/>
                            :null
                    }
                    {
                        !isMobile || props.direction==='column'?
                            <Stack spacing={3} direction={props.direction} alignItems={props.direction==='column'?'flex-start':'center'}>
                            <Button onClick={()=>changeRoute('/')} sx={location.pathname==='/'?activeStyle:passiveStyle}>
                                {t('home_page')}
                            </Button>
                                <Button onClick={()=>changeRoute('/news')} sx={location.pathname==='/news'?activeStyle:passiveStyle}>
                                    {t('news')}
                                </Button>
                            <Button onClick={()=>changeRoute('/projects')} sx={location.pathname==='/projects'?activeStyle:passiveStyle}>
                                {t('projects')}
                            </Button>
                            <Button onClick={()=>changeRoute('/about')} sx={location.pathname==='/about'?activeStyle:passiveStyle}>
                                {t('about')}
                            </Button>
                            <LanguageDropDown/>
                        </Stack>:null

                    }
                    {
                        props.direction==='row'?
                            <Button
                                startIcon={<img src={'/images/glass.png'} style={{width:'25px'}}/>}
                                variant={'contained'}
                                color={isBlind?'error':'primary'}
                                onClick={()=>changeBlind?changeBlind(!isBlind):{}}
                                sx={{textTransform:'none',fontFamily:Fonts.AppSemiBold,color:'white'}}>
                                {t('for_blind')}
                            </Button>
                        :null
                    }

                    {
                        props.direction==='row' && isMobile?
                            <MDrawer/>
                            :null
                    }


                </Stack>
            </Container>
        </Paper>
    )
}

export default Navbar;