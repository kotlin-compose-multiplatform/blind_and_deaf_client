import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Box from "@mui/material/Box";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Image from "mui-image";
import Loading from "../../components/State/Loading";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import OwlCarousel from "react-owl-carousel";
import React, { useContext, useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import VideoPlayer from "../../components/Common/VideoPlayer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { AxiosInstance } from "../../common/AxiosInstance";
import { Partners, RegionData, Regions } from "../../common/Data";
import { GBody, IHome, INews } from "../../common/Model/Model";
import { Fonts, colors } from "../../common/theme";
import { HomeAboutUs } from "../../components/AboutUs/AboutUsComp";
import { showError, showSuccess, showWarning } from "../../components/Common/Alert";
import { convertTimeStampToDate, getLanguageValue } from "./../../common/utils";
import { LoadingButton } from "@mui/lab";

import {
    checkValue,
    cleanHtml,
    getImagePath, getOtherPath,
    getProjectImages,
    getProjectVideos,
    getVideoPath
} from "../../common/utils";

import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Grid,
    Stack,
    SxProps,
    TextField,
    Theme,
    Typography
} from "@mui/material";


interface IProps {
    item: INews,
    sx?: SxProps<Theme> | undefined
}

interface SpacerProps {
    space: number
}


interface RegionProps {
    src: string,
    activeSrc: string
}

interface RegionInfoProps{
    item:RegionData
}

const Home = () => {
    const {t} = useTranslation();
    const {isMobile, isBlind, appLanguage} = useContext(AppContext);

    const [data, setData] = useState<GBody<IHome> | undefined>();
    const [loading, setLoading] = useState(true);

    //const [oneShow]

    function getHome() {
        setLoading(true);
        AxiosInstance.get('/get-client-home')
            .then(response => {
                setLoading(false);
                setData(response.data);
                console.log(response.data)
            })
            .catch(err => {
            })
    }

    useEffect(() => {
        getHome();
    }, [])

    const Spacer: React.FC<SpacerProps> = (spacer: SpacerProps) => {
        return (
            <div>
                {
                    new Array(spacer.space).fill(0).map((item, i) => {
                        return (
                            <br key={`i`}/>
                        )
                    })
                }
            </div>
        )
    }


    const HomeOurProjects = () => {
        let images = getProjectImages(data?.body ? data?.body.our_projects : [])
        let videos = getProjectVideos(data?.body ? data?.body.our_projects : [])
        return (
            <Stack spacing={2} alignItems={'center'}>
                <Typography sx={{
                    color: colors.titleColor, fontFamily: Fonts.AppBold, textAlign: 'center', fontSize:
                        isBlind ? '60px' :
                            isMobile ? '32px' : '55px'
                }}>
                    {t('our_projects')}
                </Typography>

                {/*<Typography sx={{*/}
                {/*    color: colors.titleColor, fontFamily: Fonts.AppLight, textAlign: 'center', fontSize:*/}
                {/*        isBlind ? '22px' :*/}
                {/*            isMobile ? '13px' : '16px',*/}
                {/*    width: isMobile ? '100%' : '50%'*/}
                {/*}}>*/}
                {/*    {t('our_projects_desc')}*/}
                {/*</Typography>*/}

                {
                    isMobile ?
                        <Stack spacing={2} sx={{width: '100%'}}>
                            <Stack direction={'row'} spacing={2} sx={{width: '100%'}}>
                                <Stack spacing={2} sx={{width: '50%'}}>
                                    <Card
                                        onClick={()=>{
                                            navigator('/projects')
                                        }}
                                        sx={{borderRadius: '4px', width: '100%'}} elevation={0}>
                                        <CardActionArea>
                                            <Image src={getImagePath(checkValue(images[0][0]))}
                                                   style={{borderRadius: '4px'}}
                                                   wrapperStyle={{
                                                       height: isMobile ? '120px' : '200px',
                                                       borderRadius: '4px'
                                                   }}/>
                                        </CardActionArea>
                                    </Card>
                                    <Card
                                        onClick={()=>{
                                            navigator('/projects')
                                        }}
                                        sx={{borderRadius: '4px'}}>
                                        <CardActionArea>
                                            <Image src={getImagePath(checkValue(images[1][0]))}
                                                   style={{borderRadius: '4px'}}
                                                   wrapperStyle={{
                                                       height: isMobile ? '120px' : '200px',
                                                       borderRadius: '4px'
                                                   }}/>
                                        </CardActionArea>
                                    </Card>
                                </Stack>

                                <Card
                                    sx={{borderRadius: '4px', width: '50%'}} elevation={0}>
                                    <CardActionArea>
                                        {
                                            videos.length > 0 ?
                                                <VideoPlayer
                                                    src={getVideoPath(checkValue(videos[0][0]))}
                                                    altImage={getImagePath(checkValue(images[0][0]))}
                                                    style={{width: '100%', height: '255px', borderRadius: '4px'}}/>
                                                :
                                                <Image src={getImagePath(checkValue(images[0][0]))}
                                                       style={{borderRadius: '4px'}}
                                                       wrapperStyle={{
                                                           width: '100%',
                                                           height: '255px',
                                                           borderRadius: '4px'
                                                       }}/>
                                        }

                                    </CardActionArea>
                                </Card>

                            </Stack>
                            <Stack spacing={2} sx={{width: '100%'}}>
                                <Card
                                    onClick={()=>{
                                        navigator('/projects')
                                    }}
                                    sx={{borderRadius: '4px'}} elevation={0}>
                                    <CardActionArea>
                                        <Image src={getImagePath(checkValue(images[2][0]))}
                                               style={{borderRadius: '4px'}}
                                               wrapperStyle={{height: '255px', borderRadius: '4px'}}/>
                                    </CardActionArea>
                                </Card>
                                <Card
                                    sx={{borderRadius: '4px', width: '100%'}} elevation={0}>
                                    <CardActionArea>
                                        {
                                            videos.length > 1 ?
                                                <VideoPlayer
                                                    src={getVideoPath(checkValue(videos[1][0]))}
                                                    altImage={getImagePath(checkValue(images[1][0]))}
                                                    style={{width: '100%', height: '255px', borderRadius: '4px'}}/>
                                                :
                                                <Image src={getImagePath(checkValue(images[1][0]))}
                                                       style={{borderRadius: '4px'}}
                                                       wrapperStyle={{
                                                           width: '100%',
                                                           height: '255px',
                                                           borderRadius: '4px'
                                                       }}/>
                                        }

                                    </CardActionArea>
                                </Card>
                            </Stack>
                        </Stack>
                        :
                        <Stack direction={'row'} spacing={2} sx={{width: '100%'}}>
                            <Stack spacing={2} sx={{width: '33%'}}>
                                <Card
                                    onClick={()=>{
                                        navigator('/projects')
                                    }}
                                    sx={{borderRadius: '4px'}} elevation={0}>
                                    <CardActionArea>
                                        <Image src={getImagePath(checkValue(images[0][0]))}
                                               style={{borderRadius: '4px'}}
                                               wrapperStyle={{
                                                   height: isMobile ? '120px' : '200px',
                                                   borderRadius: '4px'
                                               }}/>
                                    </CardActionArea>
                                </Card>
                                <Card
                                    onClick={()=>{
                                        navigator('/projects')
                                    }}
                                    sx={{borderRadius: '4px'}}>
                                    <CardActionArea>
                                        <Image src={getImagePath(checkValue(images[1][0]))}
                                               style={{borderRadius: '4px'}}
                                               wrapperStyle={{
                                                   height: isMobile ? '120px' : '200px',
                                                   borderRadius: '4px'
                                               }}/>
                                    </CardActionArea>
                                </Card>
                            </Stack>

                            <Card
                                sx={{borderRadius: '4px', width: '33%'}} elevation={0}>
                                <CardActionArea>
                                    {
                                        videos.length >= 1 ?
                                            <VideoPlayer
                                                src={getVideoPath(checkValue(videos[0][0]))}
                                                altImage={getImagePath(checkValue(images[0][0]))}
                                                style={{width: '100%', height: '418px', borderRadius: '4px'}}/>
                                            :
                                            <Image src={getImagePath(checkValue(images[0][0]))}
                                                   style={{borderRadius: '4px'}}
                                                   wrapperStyle={{
                                                       width: '100%',
                                                       height: '418px',
                                                       borderRadius: '4px'
                                                   }}/>
                                    }

                                </CardActionArea>
                            </Card>
                            <Stack spacing={2} sx={{width: '33%'}}>
                                <Card
                                    onClick={()=>{
                                        navigator('/projects')
                                    }}
                                    sx={{borderRadius: '4px'}} elevation={0}>
                                    <CardActionArea>
                                        <Image src={getImagePath(checkValue(images[2][0]))}
                                               style={{borderRadius: '4px'}}
                                               wrapperStyle={{
                                                   height: isMobile ? '120px' : '200px',
                                                   borderRadius: '4px'
                                               }}/>
                                    </CardActionArea>
                                </Card>
                                <Card
                                    sx={{borderRadius: '4px', width: '100%'}} elevation={0}>
                                    <CardActionArea>
                                        {
                                            videos.length > 1 ?
                                                <VideoPlayer
                                                    src={getVideoPath(checkValue(videos[1][0]))}
                                                    altImage={getImagePath(checkValue(images[1][0]))}
                                                    style={{width: '100%', height: '200px', borderRadius: '4px'}}/>
                                                :
                                                <Image src={getImagePath(checkValue(images[1][0]))}
                                                       style={{borderRadius: '4px'}}
                                                       wrapperStyle={{
                                                           width: '100%',
                                                           height: '200px',
                                                           borderRadius: '4px'
                                                       }}/>
                                        }

                                    </CardActionArea>
                                </Card>
                            </Stack>
                        </Stack>
                }
                <Spacer space={1}/>
                <Button
                    onClick={()=>{
                        navigator('/projects')
                    }}
                    variant={'contained'} sx={{
                    fontSize: '14px',
                    color: 'white',
                    textTransform: 'none',
                    fontFamily: Fonts.AppMedium
                }}>
                    {t('show_all_projects')}
                </Button>
            </Stack>
        )
    }


    const HomeTopNews: React.FC<IProps> = (item: IProps) => {
        return (
            <Stack sx={item.sx ? item.sx : null}>
                <Card
                    onClick={()=>{
                        navigator(`/view/${checkValue(item.item.id)}`)
                    }}
                    elevation={0} sx={{width: '100%'}}>
                    <CardActionArea>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Image src={getImagePath(item.item.first_image)} style={{borderRadius: '4px'}}
                                       wrapperStyle={{height: isMobile ? '120px' : '200px', borderRadius: '4px'}}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <Typography
                                        sx={{
                                            color: colors.descriptionColor, fontFamily: Fonts.AppLight, fontSize:
                                                isBlind ? '18px' :
                                                    isMobile ? '12px' : '14px'
                                        }}>
                                        {convertTimeStampToDate(checkValue(item.item.created_at))}
                                    </Typography>

                                    <Typography
                                        className={'text-lines-2'}
                                        sx={{
                                            color: colors.titleColor, fontFamily: Fonts.AppSemiBold,
                                            fontSize:
                                                isBlind ? '22px' :
                                                    isMobile ? '15px' : '18px'
                                        }}>
                                        {
                                            getLanguageValue(item.item, 'title', appLanguage)
                                        }

                                    </Typography>

                                    <Typography
                                        className={'text-lines-2'}
                                        sx={{
                                            color: colors.titleColor, fontFamily: Fonts.AppLight,
                                            fontSize:
                                                isBlind ? '16px' :
                                                    isMobile ? '13px' : '13px'
                                        }}>
                                        {cleanHtml(getLanguageValue(item.item, 'content', appLanguage))}

                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            </Stack>
        )
    }

    const LargeNews = () => {
        return (
            <Card
                onClick={()=>{
                    navigator(`/view/${checkValue(data?.body.latest_news[0].id)}`)
                }}
                sx={{
                borderRadius: '4px',
                width: '100%'
            }}>
                <CardActionArea>
                    <Stack
                        spacing={2}
                        justifyContent={'center'}
                        sx={{
                            backgroundImage: `url(${getImagePath(checkValue(data?.body.latest_news[0].first_image))})`,
                            height: '60vh',
                            backgroundSize: 'cover',
                            p: isMobile ? 2 : 4,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            backgroundBlendMode: 'darken'
                        }}>
                        <Stack
                            sx={{width: isMobile ? '100%' : '50%'}}
                            spacing={2}
                            justifyContent={'center'}>
                            <Typography
                                sx={{
                                    color: 'white', fontFamily: Fonts.AppLight, fontSize:
                                        isBlind ? '22px' :
                                            isMobile ? '12px' : '18px'
                                }}>{convertTimeStampToDate(checkValue(data?.body.latest_news[0].created_at))}</Typography>

                            <Typography
                                className={'text-lines-2'}
                                sx={{
                                    color: 'white', fontFamily: Fonts.AppSemiBold,
                                    fontSize:
                                        isBlind ? '25px' :
                                            isMobile ? '16px' : '24px'
                                }}>
                                {
                                    getLanguageValue(data?.body.latest_news[0], 'title', appLanguage)
                                }

                            </Typography>

                            <Divider sx={{width: '60%', backgroundColor: 'white', height: '2px'}}/>


                            <Typography
                                className={'text-lines-4'}
                                sx={{
                                    color: 'white', fontFamily: Fonts.AppLight,
                                    fontSize:
                                        isBlind ? '22px' :
                                            isMobile ? '16px' : '18px'
                                }}>
                                {cleanHtml(getLanguageValue(data?.body.latest_news[0], 'content', appLanguage))}

                            </Typography>
                        </Stack>
                    </Stack>
                </CardActionArea>
            </Card>
        )
    }


    const OurCertificate = () => {
        return (
            <div>
                {
                    data && data?.body && data?.body.get_certificates && data.body.get_certificates.length > 0 ?
                        <Stack spacing={2} alignItems={'center'}>
                            <Typography sx={{
                                color: colors.titleColor, fontFamily: Fonts.AppBold, textAlign: 'center', fontSize:
                                    isBlind ? '60px' :
                                        isMobile ? '32px' : '55px'
                            }}>
                                {t('our_certificate')}
                            </Typography>

                            <OwlCarousel className='owl-theme' loop autoplay={true} items={isMobile ? 2 : 3} margin={30}
                                         nav={false}
                                         dots={false}>
                                {
                                    data.body.get_certificates.map((item, i) => {
                                        return (
                                            <div className='item' key={`certificate-${i}`}>
                                                <Card onClick={()=>{
                                                    window.location.href=getOtherPath(item.file_path)
                                                }}>
                                                    <CardActionArea>
                                                        <img src={getImagePath(item.image)}
                                                             style={{
                                                                 height: isMobile ? '250px' : '450px',
                                                                 objectFit: 'cover'
                                                             }}/>
                                                        {/*<Image src={testImage} style={{height: isMobile ? '250px' : '450px'}}*/}
                                                        {/*       showLoading={<Skeleton variant="rectangular" width={'100%'}*/}
                                                        {/*                              sx={{height: isMobile ? '250px' : '450px'}}/>}/>*/}
                                                    </CardActionArea>
                                                </Card>
                                            </div>
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </Stack>
                        : null
                }

            </div>
        )
    }


    const balkanRef = useRef(null);

    const RegionImage: React.FC<RegionProps> = (props: RegionProps) => {
        const [hover, setHover] = useState(false);
        return (
            <img
                style={{cursor: 'pointer', zIndex: '-1'}}
                ref={balkanRef}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                src={hover ? props.activeSrc : props.src}/>
        )
    }

    const RegionInfo:React.FC<RegionInfoProps> = (props:RegionInfoProps) => {
        return (
            <Card sx={{
                width: '220px',
                zIndex: 3,
                position: 'absolute',
                background: `rgba(255, 255, 255, 0.01)`,
                boxShadow: `0px 0px 10px rgba(200, 200, 200, 0.1)`,
                backdropFilter: `blur(25px)`,
                borderRadius: `4px`
            }}>
                <CardActionArea>
                    <CardContent>
                        <Stack spacing={1}>
                            <LocationOnIcon color={'secondary'}/>
                            <Typography sx={{
                                fontSize: '16px',
                                color: colors.titleColor,
                                fontFamily: Fonts.AppSemiBold
                            }}>{t(props.item.name)}</Typography>
                            <Stack spacing={1} direction={'row'} alignItems={'center'}>
                                <CallOutlinedIcon color={'secondary'} sx={{width: '20px'}}/>
                                <Typography sx={{
                                    fontSize: '13px',
                                    color: colors.titleColor,
                                    fontFamily: Fonts.AppRegular
                                }}>{props.item.phone}</Typography>
                            </Stack>
                            <Stack spacing={1} direction={'row'} alignItems={'center'}>
                                <EmailOutlinedIcon color={'secondary'} sx={{width: '20px'}}/>
                                <Typography sx={{
                                    fontSize: '13px',
                                    color: colors.titleColor,
                                    fontFamily: Fonts.AppRegular
                                }}>{props.item.email}</Typography>
                            </Stack>
                            <Stack spacing={1} direction={'row'} alignItems={'center'}>
                                <LocationOnOutlinedIcon color={'secondary'} sx={{width: '20px'}}/>
                                <Typography sx={{
                                    fontSize: '13px',
                                    color: colors.titleColor,
                                    fontFamily: Fonts.AppRegular
                                }}>{t(props.item.address)}</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    const SingleContact:React.FC<RegionInfoProps> = (props:RegionInfoProps) => {
        return (
            <Card elevation={0}>
                <CardActionArea>
                    <Stack spacing={2}>
                        <Stack spacing={1} direction={'row'} alignItems={'center'}>
                            <CallOutlinedIcon color={'secondary'} sx={{width: '20px'}}/>
                            <Typography sx={{
                                fontSize: isBlind ? '22px' : '13px',
                                color: colors.titleColor,
                                fontFamily: Fonts.AppRegular
                            }}>{props.item.phone}</Typography>
                        </Stack>
                        <Stack spacing={1} direction={'row'} alignItems={'center'}>
                            <EmailOutlinedIcon color={'secondary'} sx={{width: '20px'}}/>
                            <Typography sx={{
                                fontSize: isBlind ? '22px' : '13px',
                                color: colors.titleColor,
                                fontFamily: Fonts.AppRegular
                            }}>{props.item.email}</Typography>
                        </Stack>
                        <Stack spacing={1} direction={'row'} alignItems={'center'}>
                            <LocationOnOutlinedIcon color={'secondary'} sx={{width: '20px'}}/>
                            <Typography sx={{
                                fontSize: isBlind ? '22px' : '13px',
                                color: colors.titleColor,
                                fontFamily: Fonts.AppRegular
                            }}>{t(props.item.address)}</Typography>
                        </Stack>
                    </Stack>
                </CardActionArea>
            </Card>
        )
    }


    const ContactsRegion = () => {
        const activeRegionStyle = {
            textTransform: 'none',
            fontSize: '14px',
            color: 'white',
            fontFamily: Fonts.AppBold
        }
        const passiveRegionStyle = {
            textTransform: 'none',
            fontSize: '14px',
            color: 'black',
            fontFamily: Fonts.AppBold
        }

        const [activeRegionName,setActiveRegion]=useState('agName');

        return (
            <Stack spacing={2} alignItems={'center'} sx={{width: '100%'}}>
                <Typography sx={{
                    color: colors.titleColor, fontFamily: Fonts.AppBold, textAlign: 'center', fontSize:
                        isBlind ? '60px' :
                            isMobile ? '32px' : '55px'
                }}>
                    {t('our_contacts')}
                </Typography>

                {/*<Typography sx={{*/}
                {/*    color: colors.titleColor, fontFamily: Fonts.AppLight, textAlign: 'center', fontSize:*/}
                {/*        isBlind ? '22px' :*/}
                {/*            isMobile ? '13px' : '16px',*/}
                {/*    width: isMobile ? '100%' : '50%'*/}
                {/*}}>*/}
                {/*    {t('contact_desc')}*/}
                {/*</Typography>*/}
                {
                    isMobile ?
                        <Box sx={{width: '100%'}}>
                            <Stack spacing={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Button variant={activeRegionName==='agName'?'contained':'outlined'}
                                        sx={activeRegionName==='agName'?activeRegionStyle:passiveRegionStyle}
                                    onClick={()=>setActiveRegion('agName')}>
                                    {t('agName')}
                                </Button>
                                <Button variant={activeRegionName==='dzName'?'contained':'outlined'}
                                        sx={activeRegionName==='dzName'?activeRegionStyle:passiveRegionStyle}
                                        onClick={()=>setActiveRegion('dzName')}>
                                    {t('dzName')}
                                </Button>
                                <Button variant={activeRegionName==='balkanName'?'contained':'outlined'}
                                        sx={activeRegionName==='balkanName'?activeRegionStyle:passiveRegionStyle}
                                        onClick={()=>setActiveRegion('balkanName')}>
                                    {t('balkanName')}
                                </Button>
                                <Button variant={activeRegionName==='lbName'?'contained':'outlined'}
                                        sx={activeRegionName==='lbName'?activeRegionStyle:passiveRegionStyle}
                                        onClick={()=>setActiveRegion('lbName')}>
                                    {t('lbName')}
                                </Button>

                            </Stack>
                            <Spacer space={1}/>
                            <Stack spacing={2} direction={'row'} alignItems={'center'} justifyContent={'flex-start'}>
                                <Button variant={activeRegionName==='ahName'?'contained':'outlined'}
                                        sx={activeRegionName==='ahName'?activeRegionStyle:passiveRegionStyle}
                                        onClick={()=>setActiveRegion('ahName')}>
                                    {t('ahName')}
                                </Button>
                                <Button variant={activeRegionName==='mrName'?'contained':'outlined'}
                                        sx={activeRegionName==='mrName'?activeRegionStyle:passiveRegionStyle}
                                        onClick={()=>setActiveRegion('mrName')}>
                                    {t('mrName')}
                                </Button>

                            </Stack>

                            <Spacer space={2}/>

                            <SingleContact item={Regions[activeRegionName]}/>

                        </Box>
                        :
                        <div>
                            <Spacer space={5}/>
                            <Stack sx={{position: 'relative', width: '100%', height: '400px', alignItems: 'center'}}>
                                <Stack direction={'row'} sx={{position: 'absolute'}}>
                                    <div style={{width: '33%'}}>

                                        <RegionImage src={'/images/TKM351.svg'}
                                                     activeSrc={'/images/TKM351_active.svg'}/>
                                        <div style={{
                                            marginTop: '-250px',
                                            marginLeft: '-50px',
                                        }}>
                                            <RegionInfo item={Regions.balkanName}/>
                                        </div>
                                    </div>
                                    <div style={{width: '33%', marginLeft: '-56px', marginTop: '-35px'}}>
                                        <div>
                                            <RegionImage src={'/images/TKM353.svg'}
                                                         activeSrc={'/images/TKM353_active.svg'}/>
                                            <div style={{
                                                marginTop: '-330px',
                                                marginLeft: '50px',
                                                position: 'absolute'
                                            }}>
                                                <RegionInfo item={Regions.dzName}/>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '-62px'}}>
                                            <RegionImage src={'/images/TKM352.svg'}
                                                         activeSrc={'/images/TKM352_active.svg'}/>
                                            <div style={{
                                                marginTop: '-250px',
                                                marginLeft: '-10px',
                                                position: 'absolute'
                                            }}>
                                                <RegionInfo item={Regions.ahName}/>
                                            </div>
                                        </div>

                                    </div>
                                    <div style={{width: '33%', marginLeft: '-50px'}}>
                                        <div style={{marginTop: '82px', marginLeft: '-8px'}}>
                                            <RegionImage src={'/images/TKM359.svg'}
                                                         activeSrc={'/images/TKM359_active.svg'}/>
                                            <div style={{
                                                marginTop: '-400px',
                                                marginLeft: '100px',
                                                position: 'absolute'
                                            }}>
                                                <RegionInfo item={Regions.lbName}/>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '-203px', marginLeft: '3px'}}>
                                            <RegionImage src={'/images/TKM360.svg'}
                                                         activeSrc={'/images/TKM360_active.svg'}/>
                                            <div style={{
                                                marginTop: '-140px',
                                                marginLeft: '100px',
                                                position: 'absolute'
                                            }}>
                                                <RegionInfo item={Regions.mrName}/>
                                            </div>
                                        </div>

                                    </div>
                                </Stack>
                            </Stack>

                        </div>
                }
            </Stack>
        )
    }

    const OurPartners = () => {
        return (
            <Stack spacing={2} alignItems={'center'}>
                <Typography sx={{
                    color: colors.titleColor, fontFamily: Fonts.AppBold, textAlign: 'center', fontSize:
                        isBlind ? '60px' :
                            isMobile ? '32px' : '55px'
                }}>
                    {t('our_partners')}
                </Typography>

                <Spacer space={1}/>
                <Divider sx={{width: '100%', height: '2px'}} color={colors.primary}/>

                <OwlCarousel className='owl-theme' loop autoplay={true} items={isMobile ? 3 : 5} margin={30} nav={false}
                             dots={false}>
                    {
                        Partners.map((item,i)=>{
                            return(
                                <div className='item' key={`parner-${Math.random()*100}`}>
                                    <Card elevation={0} onClick={()=>{
                                        alert(item.link)
                                        if(item.link && item.link!==''){
                                            window.location.href=item.link
                                        }
                                    }}>
                                        <CardActionArea>
                                            <img src={item.image} style={{height: '60px', objectFit: 'contain'}}/>
                                            {/*<Image src={testImage} style={{height: '100px'}}*/}
                                            {/*       showLoading={<Skeleton variant="rectangular" width={'100%'}*/}
                                            {/*                              sx={{height: '100px'}}/>}/>*/}
                                        </CardActionArea>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>
                <Divider sx={{width: '100%', height: '2px'}} color={colors.primary}/>

            </Stack>
        )
    }

    const ContactUs = () => {
        const [fullname,setFullname]=useState('')
        const [email,setEmail]=useState('')
        const [message,setMessage]=useState('')
        const [inboxLoading,setInboxLoading]=useState(false);

        const sendInbox=()=>{
            if(fullname.trim().length>0 && email.trim().length>0 && message.trim().length>0){
                setInboxLoading(true)
                AxiosInstance.post('add-inbox',{
                    username:fullname,
                    email:email,
                    text:message
                })
                    .then(response=>{
                        showSuccess(t('success'))
                        setFullname('')
                        setEmail('')
                        setMessage('')
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
            <Stack spacing={2} alignItems={'center'} sx={{width: '100%'}}>
                <Typography sx={{
                    color: colors.titleColor, fontFamily: Fonts.AppBold, textAlign: 'center', fontSize:
                        isBlind ? '60px' :
                            isMobile ? '32px' : '55px'
                }}>
                    {t('contacts')}
                </Typography>
                <Spacer space={1}/>
                <Grid container spacing={isMobile ? 0 : 2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack spacing={4}>
                            {/*<Typography sx={{*/}
                            {/*    color: colors.titleColor, fontFamily: Fonts.AppLight, fontSize:*/}
                            {/*        isBlind ? '22px' :*/}
                            {/*            isMobile ? '13px' : '16px',*/}
                            {/*    width: isMobile ? '100%' : '90%'*/}
                            {/*}}>*/}
                            {/*    {t('contact_desc')}*/}
                            {/*</Typography>*/}

                            <SingleContact item={Regions.agName}/>
                        </Stack>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        {isMobile ? <Spacer space={2}/> : null}
                        <Card sx={{borderRadius: '4px'}}>
                            <CardContent>
                                <Stack spacing={2}>
                                    <Typography
                                        sx={{
                                            color: colors.titleColor,
                                            fontSize: isBlind ? '24px' : '16px',
                                            fontFamily: Fonts.AppSemiBold
                                        }}
                                    >
                                        {t('your_name')}
                                    </Typography>
                                    <TextField
                                        sx={{
                                            color: colors.titleColor,
                                            fontSize: isBlind ? '24px' : '16px',
                                            fontFamily: Fonts.AppRegular
                                        }}
                                        type={'text'}
                                        label={t('first_name')}
                                        variant={'filled'}
                                        value={fullname}
                                        onChange={e=>setFullname(e.target.value)}
                                    />

                                    <Typography
                                        sx={{
                                            color: colors.titleColor,
                                            fontSize: isBlind ? '24px' : '16px',
                                            fontFamily: Fonts.AppSemiBold
                                        }}
                                    >
                                        {t('input_field')}
                                    </Typography>
                                    <TextField
                                        sx={{
                                            color: colors.titleColor,
                                            fontSize: isBlind ? '24px' : '16px',
                                            fontFamily: Fonts.AppRegular
                                        }}
                                        type={'email'}
                                        label={t('your_email')}
                                        variant={'filled'}
                                        value={email}
                                        onChange={e=>setEmail(e.target.value)}
                                    />

                                    <Typography
                                        sx={{
                                            color: colors.titleColor,
                                            fontSize: isBlind ? '24px' : '16px',
                                            fontFamily: Fonts.AppSemiBold
                                        }}
                                    >
                                        {t('your_message')}
                                    </Typography>
                                    <TextField
                                        sx={{
                                            color: colors.titleColor,
                                            fontSize: isBlind ? '24px' : '16px',
                                            fontFamily: Fonts.AppRegular
                                        }}
                                        type={'text'}
                                        rows={4}
                                        multiline
                                        label={t('message')}
                                        variant={'filled'}
                                        value={message}
                                        onChange={e=>setMessage(e.target.value)}
                                    />

                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'}>
                                        <LoadingButton
                                            loading={inboxLoading}
                                            onClick={()=>sendInbox()}
                                            variant={'contained'} sx={{
                                            textTransform: 'none',
                                            fontSize: '16px',
                                            color: 'white',
                                            fontFamily: Fonts.AppBold
                                        }}>
                                            {t('send')}
                                        </LoadingButton>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Stack>
        )
    }

    const [search,setSearch]=useState('');
    const navigator=useNavigate()



    return (
        <Stack>
            {
                loading ? <Loading/> :
                    <Stack sx={{pt: 4, pb: 4}} spacing={4}>

                        <Stack spacing={2} direction={isMobile ? 'column' : 'row'} justifyContent={'space-between'}
                               alignItems={isMobile ? 'flex-start' : 'center'}>
                            <Typography sx={{
                                color: colors.titleColor,
                                fontSize: '26px',
                                width: '70%',
                                fontFamily: Fonts.AppBold
                            }}>{t('latest_news')}</Typography>


                            <Stack
                                direction={'row'} alignItems={'center'} sx={{
                                backgroundColor: colors.passiveBg,
                                p: 1,
                                pl: 2,
                                width: isMobile ? '90%' : '30%',
                                borderRadius: '4px',
                                color: 'secondary.main'
                            }}>
                                <SearchIcon/>
                                <input
                                    value={search}
                                    onChange={e=>setSearch(e.target.value)}
                                    onKeyPress={e => {
                                        if(e.key==='Enter'){
                                            if(search.trim().length>0){
                                                navigator('/search?q='+search)
                                            }
                                        }
                                    }
                                    }
                                    style={{
                                        outline: 'none',
                                        border: 'none',
                                        padding: '6px',
                                        color: colors.titleColor,
                                        fontFamily: Fonts.AppRegular,
                                        backgroundColor: 'transparent',
                                        fontSize: '16px'
                                    }} placeholder={t('search')}/>
                            </Stack>

                        </Stack>

                        {
                            data?.body ? data?.body.latest_news.length > 0 ?
                                <LargeNews/> : null : null
                        }
                        <Grid container>
                            {
                                data?.body ? data?.body.latest_news.length > 1 ?
                                    <Grid item xs={12} sm={12} md={6}>
                                        <HomeTopNews item={data?.body.latest_news[1]}
                                                     sx={{mr: isMobile ? 0 : 2}}/>
                                    </Grid> : null : null
                            }


                            {
                                data?.body ? data?.body.latest_news.length > 2 ?
                                    <Grid item xs={12} sm={12} md={6}>
                                        {isMobile ? <br/> : null}
                                        <HomeTopNews item={data?.body.latest_news[2]}/>
                                    </Grid> : null : null
                            }
                        </Grid>

                        <Spacer space={4}/>

                        <HomeOurProjects/>

                        {/*<Spacer space={4}/>*/}

                        {/*<HomeAboutUs/>*/}

                        <Spacer space={4}/>
                        <OurCertificate/>
                        <Spacer space={4}/>

                        <ContactsRegion/>
                        <Spacer space={isMobile ? 4 : 15}/>

                        <OurPartners/>

                        <Spacer space={4}/>

                        <ContactUs/>

                        <Spacer space={4}/>
                    </Stack>
            }
        </Stack>
    )
}

export default Home;