import React, {useContext} from 'react';
import {Box, Button, Card, CardActionArea, Grid, Stack, Typography} from "@mui/material";
import {colors, Fonts} from "../../common/theme";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import {innerHTML, testImage, testImage2} from "../../common/utils";
import ImageViewer from "../../components/Common/ImageViewer";
import Spacer from "../../components/Common/Spacer";
import DownloadIcon from '@mui/icons-material/Download';
import VideoPlayer from "../../components/Common/VideoPlayer";

const ProjectView = () => {
    const {t}=useTranslation();
    const {isMobile,isBlind}=useContext(AppContext);

    const OtherFile = () => {
        return(
            <Box sx={{cursor:'pointer',color:'primary.main'}}>
                <Stack direction={'row'} spacing={2}>
                    <DownloadIcon/>
                    <Typography sx={{
                        fontSize: '16px',
                        fontFamily: Fonts.AppSemiBold
                    }}>
                        Other file
                    </Typography>
                </Stack>
            </Box>
        )
    }

    return (
        <Stack sx={{pt: 4, pb: 4}}>
            <Typography sx={{
                color: colors.titleColor,
                fontSize: '26px',
                width: '100%',
                fontFamily: Fonts.AppBold
            }}>News Title</Typography>
            <Typography
                sx={{
                    color: colors.descriptionColor, fontFamily: Fonts.AppRegular, fontSize:
                        isBlind ? '22px' :
                            isMobile ? '12px' : '14px'
                }}>30 September
                2022 / Views: 123</Typography>

            <Spacer space={2}/>
            <ImageViewer images={[testImage,testImage2,testImage,testImage,testImage2,testImage,testImage,testImage2,testImage]}/>

            <Spacer space={2}/>
            <div dangerouslySetInnerHTML={{__html:innerHTML}} style={{
                maxWidth:'100%',
                overflow:'hidden'
            }}>

            </div>
            <Spacer space={2}/>
            <VideoPlayer src={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'} altImage={testImage}
                         playIconStyle={isMobile?{width:'30px',height:'30px'}:undefined}
                         style={{width:'100%',height:isMobile?'200px':'400px'}}/>
            <Spacer space={2}/>

            <Stack spacing={2}>
                <OtherFile/>
                <OtherFile/>
                <OtherFile/>
                <OtherFile/>
            </Stack>

            <Spacer space={4}/>


        </Stack>
    )
}

export default ProjectView;