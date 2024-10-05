import React, {useState, useEffect, useContext} from 'react';
import {Card, CardActionArea, Divider, Stack, Typography} from "@mui/material";
import {checkValue, convertTimeStampToDate, getImagePath, getLanguageValue, lorem, testImage} from "../../common/utils";
import Spacer from "../Common/Spacer";
import {colors, Fonts} from "../../common/theme";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import {INews} from "../../common/Model/Model";
import {useNavigate} from "react-router-dom";

interface IProps {
    onlyText: boolean,
    item:INews
}

const NewsComponent: React.FC<IProps> = (props: IProps) => {
    const {t} = useTranslation();
    const {isMobile, isBlind,appLanguage} = useContext(AppContext);
    const navigator=useNavigate()
    return (
            <div>
                {
                    props.item && props.item.id?
                        <Card
                            onClick={()=>{
                                navigator(`/view/${props.item.id}`)
                            }
                            }
                            elevation={0} sx={{
                            borderRadius: '4px',
                            width: '100%'
                        }}>
                            <CardActionArea>
                                {
                                    props.onlyText ? null :
                                        <Stack
                                            spacing={2}
                                            justifyContent={'center'}
                                            sx={{
                                                backgroundImage: `url(${getImagePath(checkValue(props.item.first_image))})`,
                                                height: '120px',
                                                backgroundSize: 'cover',
                                                p: isMobile ? 2 : 4,
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundColor: 'rgba(0,0,0,0.6)',
                                                backgroundBlendMode: 'darken',
                                                borderRadius: '4px'
                                            }}>
                                        </Stack>
                                }

                                {
                                    props.onlyText?null:<Spacer space={1}/>
                                }
                                <Typography
                                    className={'text-lines-3'}
                                    sx={{
                                        color: colors.titleColor, fontFamily: Fonts.AppSemiBold,
                                        fontSize:
                                            isBlind ? '20px' :
                                                isMobile ? '12px' : '14px'
                                    }}>
                                    {getLanguageValue(props.item, 'title', appLanguage)}

                                </Typography>
                                <Spacer space={1}/>
                                <Typography
                                    sx={{
                                        color: colors.descriptionColor, fontFamily: Fonts.AppLight, fontSize:
                                            isBlind ? '22px' :
                                                isMobile ? '12px' : '14px'
                                    }}>{convertTimeStampToDate(checkValue(props.item.created_at))}</Typography>
                                <Spacer space={1}/>
                                {
                                    props.onlyText?
                                        <Divider sx={{width:'100%'}} color={colors.passiveText}/>
                                        :
                                        null
                                }
                            </CardActionArea>
                        </Card>
                        :
                        null
                }
            </div>
    )
}

export default NewsComponent;