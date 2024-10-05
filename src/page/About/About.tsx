import React, {useState, useEffect, useContext} from 'react';
import {Typography, Stack, ImageListItem, Box, ImageList, Grid, Card, CardActionArea, Skeleton} from "@mui/material";
import {colors, Fonts} from "../../common/theme";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import Spacer from "../../components/Common/Spacer";
import Image from "mui-image";
import {testImage} from "../../common/utils";
import {AboutStepper} from "../../components/AboutUs/AboutUsComp";
import VideoPlayer from "../../components/Common/VideoPlayer";
import CheckIcon from '@mui/icons-material/Check';
import AccordionAbout from "../../components/AboutUs/AccordionAbout";
import {AxiosInstance} from "../../common/AxiosInstance";
import {IAbout} from "../../common/Model/Model";
import {ABOUT_TYPE} from "../../common/Data";

const itemData = new Array(16).fill(0).map((it,i)=>{
    return {
        img: `/images/about/img- (${i+1}).jpg`, title: 'TKKJ'
    }
});

function AboutImageList() {
    const {isMobile}=useContext(AppContext);
    return (
        <Box sx={{ width: '100%', height: '400px', overflowY: 'scroll' }}>
            <ImageList variant={isMobile?'standard':"masonry" } cols={2} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            style={{borderRadius:'4px'}}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

interface CheckProp{
    title:string
}

const CheckItem:React.FC<CheckProp>=(props:CheckProp)=>{
    return(
        <Stack direction={'row'} alignItems={'center'} spacing={2} sx={{color:'primary.main'}}>
            <CheckIcon/>
            <Typography sx={{
                color: colors.descriptionColor, fontFamily: Fonts.AppRegular, textAlign: 'center', fontSize:'13px'}}>
                {props.title}
            </Typography>
        </Stack>
    )
}

const About = () => {
    const {t} = useTranslation();
    const {isMobile, isBlind} = useContext(AppContext);


    const [data, setData] = useState<IAbout[] | undefined>();
    const [loading, setLoading] = useState(false);

    function getData() {
        setLoading(true);
        AxiosInstance.get(`/about/get-about-items`)
            .then(response => {
                if (!response.data.error) {
                    try {
                        // if (response.data.body.pageCount > 0 && response.data.body.data.length > 0) {
                        setData(response.data);
                        // }
                    } catch (err) {

                    }
                }
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Stack spacing={2} alignItems={'center'}>
            <Spacer space={2}/>
            <Typography sx={{
                color: colors.titleColor, fontFamily: Fonts.AppBold, textAlign: 'center', fontSize:
                    isBlind ? '60px' :
                        isMobile ? '32px' : '40px'
            }}>
                {t('about')}
            </Typography>

            <Typography sx={{
                color: colors.titleColor, fontFamily: Fonts.AppLight, textAlign: 'center', fontSize:
                    isBlind ? '22px' :
                        isMobile ? '13px' : '16px',
                width: isMobile ? '100%' : '50%'
            }}>
                {t('about_us_desc')}
            </Typography>
            <Spacer space={2}/>

            {
                data && typeof data!=='undefined'?<AccordionAbout title={t('about_1')} type={0} data={data}/>:null
            }

            <Spacer space={2}/>

            {
                data && typeof data!=='undefined'?<AccordionAbout title={t('parts')} type={3} data={data}/>:null
            }

            <Spacer space={2}/>

            {
                data && typeof data!=='undefined'?<AccordionAbout title={t('other_about')} type={4} data={data}/>:null
            }

            {/*<Grid container>*/}
            {/*    <Grid item xs={12} sm={12} md={6}>*/}
            {/*        <AboutImageList/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12} sm={12} md={6}>*/}
            {/*        <Stack spacing={2} sx={{ml:isMobile?0:3,mt:isMobile?3:0}}>*/}
            {/*            <Typography sx={{*/}
            {/*                color: colors.titleColor, fontFamily: Fonts.AppBold, fontSize:*/}
            {/*                    isBlind ? '35px' :*/}
            {/*                        isMobile ? '18px' : '26px'*/}
            {/*            }}>*/}
            {/*                {t('about_desc')}*/}
            {/*            </Typography>*/}

            {/*            <Typography sx={{*/}
            {/*                color: colors.titleColor, fontFamily: Fonts.AppLight, fontSize:*/}
            {/*                    isBlind ? '22px' :*/}
            {/*                        isMobile ? '13px' : '16px',*/}
            {/*                width: '100%'*/}
            {/*            }}>*/}
            {/*                {t('about_desc_2')}*/}
            {/*            </Typography>*/}

            {/*            /!*<CheckItem title={'First section'}/>*!/*/}
            {/*            /!*<CheckItem title={'First section'}/>*!/*/}
            {/*            /!*<CheckItem title={'First section'}/>*!/*/}
            {/*            /!*<CheckItem title={'First section'}/>*!/*/}
            {/*        </Stack>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}


            {/*<Spacer space={2}/>*/}
            {/*<Stack sx={{width:'100%'}}>*/}
            {/*    <VideoPlayer src={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'} altImage={'/images/about/video_placeholder.png'}*/}
            {/*                 playIconStyle={isMobile?{width:'30px',height:'30px'}:undefined}*/}
            {/*                 style={{width:'100%',height:isMobile?'200px':'400px'}}/>*/}
            {/*</Stack>*/}


            <Spacer space={4}/>
        </Stack>
    )
}

export default About;