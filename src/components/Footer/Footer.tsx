import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import React, { useContext, useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../App";
import { AxiosInstance } from "../../common/AxiosInstance";
import { Regions } from "../../common/Data";
import { Fonts, colors } from "../../common/theme";
import { showError, showSuccess, showWarning } from "../Common/Alert";

import {
    Box,
    Button,
    CardActionArea,
    CircularProgress,
    Container,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography
} from "@mui/material";

const Footer = () => {
    const {isMobile, isBlind} = useContext(AppContext)
    const {t} = useTranslation();
    const [fullname,setFullname]=useState('Subscriber')
    const [email,setEmail]=useState('')
    const [inboxLoading,setInboxLoading]=useState(false);
    const sendInbox=()=>{
        if(fullname.trim().length>0 && email.trim().length>0){
            setInboxLoading(true)
            AxiosInstance.post('add-inbox',{
                username:fullname,
                email:email,
                text:`${email} subscribed for the latest news!`
            })
                .then(response=>{
                    showSuccess(t('success'))
                    setEmail('')
                    setInboxLoading(false)
                })
                .catch(err=>{
                    showError(t('error'))
                    setInboxLoading(false)
                })
        } else {
            showWarning(t('enter_full'))
        }
    }
    return (
        <Box sx={{pt: 3, pb: 3, backgroundColor: colors.titleColor}}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack spacing={2}>
                            <img src={'/images/white_logo.svg'} style={{width: isMobile?'300px':'200px'}}/>
                            {
                                isMobile?
                                    <Divider sx={{width:'100%',backgroundColor:'white',height:'2px'}}/>
                                    :
                                    <Stack spacing={2}>
                                        {/*<Typography sx={{*/}
                                        {/*    color: colors.passiveText,*/}
                                        {/*    fontFamily: Fonts.AppLight,*/}
                                        {/*    fontSize: isBlind ? '20px' : '14px'*/}
                                        {/*}}>*/}
                                        {/*    {t('footer_desc')}*/}
                                        {/*</Typography>*/}
                                        <Stack direction={'row'} spacing={3} alignItems={'center'}>
                                            <Stack
                                                onClick={() => {
                                                    window.location.href = 'tel:'+Regions.agName.phone
                                                }}
                                                direction={'row'} spacing={2} alignItems={'center'}>
                                                <Stack alignItems={'center'} justifyContent={'center'} style={{
                                                    borderRadius: '50%',
                                                    backgroundColor: colors.titleColor, color: 'white', padding: '8px'
                                                }}>
                                                    <CallOutlinedIcon/>
                                                </Stack>
                                                <div>
                                                    <Typography sx={{
                                                        color: colors.passiveText,
                                                        fontFamily: Fonts.AppLight,
                                                        fontSize: isBlind ? '18px' : '12px'
                                                    }}>{t('our_phone')}</Typography>
                                                    <Typography sx={{
                                                        color: 'white',
                                                        fontFamily: Fonts.AppLight,
                                                        fontSize: isBlind ? '20px' : '16px'
                                                    }}>{Regions.agName.phone}</Typography>
                                                </div>
                                            </Stack>

                                            <Stack
                                                onClick={() => {
                                                    window.location.href = 'mailto:'+Regions.agName.email
                                                }}
                                                direction={'row'} spacing={2} alignItems={'center'}>
                                                <Stack alignItems={'center'} justifyContent={'center'} style={{
                                                    borderRadius: '50%',
                                                    backgroundColor: colors.titleColor, color: 'white', padding: '8px'
                                                }}>
                                                    <LocalPostOfficeOutlinedIcon/>
                                                </Stack>
                                                <div>
                                                    <Typography sx={{
                                                        color: colors.passiveText,
                                                        fontFamily: Fonts.AppLight,
                                                        fontSize: isBlind ? '18px' : '12px'
                                                    }}>{t('our_email')}</Typography>
                                                    <Typography sx={{
                                                        color: 'white',
                                                        fontFamily: Fonts.AppLight,
                                                        fontSize: isBlind ? '20px' : '16px'
                                                    }}>{Regions.agName.email}</Typography>
                                                </div>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                            }

                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <Stack spacing={2}>
                            <Typography sx={{
                                color: 'white',
                                fontFamily: Fonts.AppBold,
                                fontSize: isBlind ? '25px' : '18px'
                            }}>
                                {t('newsletter')}
                            </Typography>

                            {/*<Typography sx={{*/}
                            {/*    color: colors.passiveText,*/}
                            {/*    fontFamily: Fonts.AppLight,*/}
                            {/*    fontSize: isBlind ? '20px' : '14px'*/}
                            {/*}}>*/}
                            {/*    {t('footer_desc')}*/}
                            {/*</Typography>*/}

                            <Stack direction={'row'}
                                   alignItems={'center'}
                                   justifyContent={'space-between'}
                                   spacing={2}
                                   sx={{
                                       backgroundColor: colors.titleColor,
                                       pl: 2,
                                       pr:2,
                                       pt:1,
                                       pb:1,
                                       color: colors.passiveText,
                                       borderRadius: '4px'
                                   }}>
                                <Stack sx={{width:'100%'}} direction={'row'}
                                       alignItems={'center'}
                                       spacing={2}>
                                    <LocalPostOfficeOutlinedIcon/>

                                    <input
                                        value={email}
                                        onChange={e=>setEmail(e.target.value)}
                                        style={{
                                        outline:'none',
                                        border:'none',
                                        color:'white',
                                        fontFamily:Fonts.AppRegular,
                                        fontSize:'14px',
                                            width:'100%',
                                        backgroundColor:'transparent'
                                    }} placeholder={t('enter_mail')}/>
                                </Stack>

                                <LoadingButton loadingIndicator={<CircularProgress size={20}/>} onClick={sendInbox} loading={inboxLoading} variant={'contained'} sx={{fontFamily:Fonts.AppMedium,color:'white',fontSize:'12px'}}>
                                    {t('submit')}
                                </LoadingButton>
                            </Stack>

                            {
                                isMobile?
                                    <Divider sx={{width:'100%',backgroundColor:'white',height:'2px'}}/>
                                    :
                                    <Stack sx={{width:'100%'}} spacing={2} direction={'row'} alignItems={'center'} justifyContent={'flex-end'}>
                                        <Stack alignItems={'center'} justifyContent={'center'} style={{
                                            borderRadius: '50%',
                                            cursor:'pointer',
                                            backgroundColor: colors.titleColor, color: 'white', padding: '14px'
                                        }}>
                                            <img src={'/images/facebook.svg'}/>
                                        </Stack>

                                        <Stack alignItems={'center'} justifyContent={'center'} style={{
                                            borderRadius: '50%',
                                            cursor:'pointer',
                                            backgroundColor: colors.titleColor, color: 'white', padding: '14px'
                                        }}>
                                            <img src={'/images/youtube.svg'}/>
                                        </Stack>

                                        <Stack alignItems={'center'} justifyContent={'center'} style={{
                                            borderRadius: '50%',
                                            cursor:'pointer',
                                            backgroundColor: colors.titleColor, color: 'white', padding: '14px'
                                        }}>
                                            <img src={'/images/whatsapp.svg'}/>
                                        </Stack>
                                    </Stack>

                            }
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <Typography sx={{
                            color: colors.passiveText,
                            fontFamily: Fonts.AppLight,
                            fontSize: isBlind ? '20px' : '14px'
                        }}>
                            © {new Date().getFullYear()}-{new Date().getFullYear()+1}, {t('all_right')}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;