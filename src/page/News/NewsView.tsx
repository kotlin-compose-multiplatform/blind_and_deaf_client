import React, {useContext, useEffect, useState} from 'react';
import {Box, Button, Card, CardActionArea, Grid, Stack, Typography} from "@mui/material";
import {colors, Fonts} from "../../common/theme";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import {
    checkValue,
    convertTimeStampToDate, getImagePath,
    getLanguageValue, getOtherPath, getVideoPath,
    innerHTML,
    testImage,
    testImage2
} from "../../common/utils";
import ImageViewer from "../../components/Common/ImageViewer";
import Spacer from "../../components/Common/Spacer";
import DownloadIcon from '@mui/icons-material/Download';
import VideoPlayer from "../../components/Common/VideoPlayer";
import {useParams} from "react-router-dom";
import {IFiles, INews} from "../../common/Model/Model";
import {AxiosInstance} from "../../common/AxiosInstance";
import Loading from "../../components/State/Loading";
import Empty from "../../components/State/Empty";

interface IOther {
    item:IFiles
}

const NewsView = () => {
    const {t} = useTranslation();
    const {isMobile, isBlind,appLanguage} = useContext(AppContext);
    let {id} = useParams();
    const [data, setData] = useState<INews | undefined>();
    const [loading, setLoading] = useState(true);

    function getData() {
        AxiosInstance.get(`/get-single?id=${id}`)
            .then(result => {
                setLoading(false)
                setData(result.data.body);
            })
            .catch(err => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const OtherFile:React.FC<IOther> = (props:IOther) => {
        return (
            <Box sx={{cursor: 'pointer', color: 'primary.main'}}
                onClick={()=>{
                    window.location.href=getOtherPath(props.item.url)
                }}
            >
                <Stack direction={'row'} spacing={2}>
                    <DownloadIcon/>
                    <Typography sx={{
                        fontSize: '16px',
                        fontFamily: Fonts.AppSemiBold
                    }}>
                        {props.item.url.split('/')[props.item.url.split('/').length-1]}
                    </Typography>
                </Stack>
            </Box>
        )
    }

    return (
        <div>
            {
                loading ?
                    <Loading/>
                    :
                    <div>
                        {
                            data && data.id ?
                                <Stack sx={{pt: 4, pb: 4}}>
                                    <Typography sx={{
                                        color: colors.titleColor,
                                        fontSize: '26px',
                                        width: '70%',
                                        fontFamily: Fonts.AppBold
                                    }}>{
                                        getLanguageValue(data, 'title', appLanguage)
                                    }</Typography>
                                    <Typography
                                        sx={{
                                            color: colors.descriptionColor, fontFamily: Fonts.AppRegular, fontSize:
                                                isBlind ? '22px' :
                                                    isMobile ? '12px' : '14px'
                                        }}>{convertTimeStampToDate(checkValue(data.created_at))} / {t('views')}:
                                        {data.views}</Typography>

                                    <Spacer space={2}/>
                                    <ImageViewer
                                        images={data.files?data.files?.filter(it=>it.mime_type==1).map(it=>it.url):[]}/>

                                    <Spacer space={2}/>
                                    <div dangerouslySetInnerHTML={{__html: getLanguageValue(data,'content',appLanguage)}} style={{
                                        maxWidth: '100%',
                                        overflow: 'hidden'
                                    }}>

                                    </div>
                                    <Spacer space={2}/>
                                    {
                                        data.files?data.files?.filter(it=>it.mime_type==0).length>0?
                                            <VideoPlayer src={getVideoPath(data.files?.filter(it=>it.mime_type==0)[0].url)}
                                                         altImage={data.files?getImagePath(data.files?.filter(it=>it.mime_type==1)[0].url):''}
                                                         playIconStyle={isMobile ? {width: '30px', height: '30px'} : undefined}
                                                         style={{width: '100%', height: isMobile ? '200px' : '400px'}}/>
                                            :null:null
                                    }

                                    <Spacer space={2}/>

                                    <Stack spacing={2}>
                                        {
                                            data.files?data.files?.filter(it=>it.mime_type==2).length>0?
                                                data.files?.filter(it=>it.mime_type==2).map(it=>{
                                                    return(<OtherFile item={it} key={`other-${it}`}/>)
                                                })
                                                :
                                                null:null
                                        }

                                    </Stack>

                                    <Spacer space={4}/>


                                </Stack>
                                :
                                <Empty/>
                        }
                    </div>
            }
        </div>
    )
}

export default NewsView;