import React, {useState, useEffect, useContext} from 'react';
import {Card, CardActionArea, Divider, Stack, Typography} from "@mui/material";
import {
    checkValue,
    cleanHtml,
    convertTimeStampToDate,
    getImagePath,
    getLanguageValue,
    lorem,
    testImage
} from "../../common/utils";
import {colors, Fonts} from "../../common/theme";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import Spacer from "../Common/Spacer";
import {INews} from "../../common/Model/Model";
import {useNavigate} from "react-router-dom";

interface IProps{
    item:INews
}

const LargeNews:React.FC<IProps> = (props:IProps) => {
    const {t}=useTranslation();
    const {isMobile,isBlind,appLanguage} = useContext(AppContext);
    // console.log(`item-${props.item}`)
    const navigator=useNavigate()
    return (
        <div>
            {
                props.item && props.item.id ?
                    <Card onClick={()=>{
                        navigator(`/view/${props.item.id}`)
                    }
                    } elevation={0} sx={{
                        borderRadius: '4px',
                        width: '100%'
                    }}>
                        <CardActionArea>
                            <Stack
                                spacing={2}
                                justifyContent={'center'}
                                sx={{
                                    backgroundImage: `url(${getImagePath(checkValue(props.item.first_image))})`,
                                    height: '30vh',
                                    backgroundSize: 'cover',
                                    p: isMobile ? 2 : 4,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                    backgroundBlendMode: 'darken',
                                    borderRadius: '4px'
                                }}>
                            </Stack>
                            <Spacer space={1}/>
                            <Typography
                                sx={{
                                    color: colors.descriptionColor, fontFamily: Fonts.AppLight, fontSize:
                                        isBlind ? '22px' :
                                            isMobile ? '12px' : '14px'
                                }}>{convertTimeStampToDate(checkValue(props.item.created_at))}</Typography>
                            <Spacer space={1}/>
                            <Typography
                                className={'text-lines-2'}
                                sx={{
                                    color: colors.titleColor, fontFamily: Fonts.AppSemiBold,
                                    fontSize:
                                        isBlind ? '25px' :
                                            isMobile ? '16px' : '18px'
                                }}>
                                {
                                    getLanguageValue(props.item, 'title', appLanguage)
                                }

                            </Typography>
                            <Spacer space={1}/>
                            <Typography
                                className={'text-lines-3'}
                                sx={{
                                    color: colors.descriptionColor, fontFamily: Fonts.AppLight,
                                    fontSize:
                                        isBlind ? '22px' :
                                            isMobile ? '16px' : '18px'
                                }}>
                                {cleanHtml(getLanguageValue(props.item,'content',appLanguage))}

                            </Typography>
                        </CardActionArea>
                    </Card>:null
            }
        </div>
    )
}

export default LargeNews;