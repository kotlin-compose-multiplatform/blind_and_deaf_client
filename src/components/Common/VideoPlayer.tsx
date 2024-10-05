import React, {useState, useEffect} from 'react';
import {Card, CardActionArea, Stack} from "@mui/material";
import Image from "mui-image";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {colors} from "../../common/theme";

interface IProps{
    src:string,
    altImage:string,
    altText?:string,
    style:React.CSSProperties | undefined,
    playIconStyle?:React.CSSProperties | undefined
}

const VideoPlayer:React.FC<IProps> = (item:IProps) => {
    const [playing,setPlaying]=useState(false);
    return (
        <Card elevation={0}>
            <CardActionArea onClick={()=>setPlaying(!playing)}>
                {
                    playing?
                        <video
                            style={{...item.style,backgroundColor:colors.black}}
                            controls={true}
                            autoPlay={playing}
                            onClick={()=>setPlaying(!playing)}
                            src={item.src}/>
                        :
                        <Stack
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{...item.style,
                            backgroundImage:`url(${item.altImage})`,
                            backgroundSize:'cover',
                            backgroundPosition:'center',
                            backgroundRepeat:'no-repeat',
                            backgroundColor:'rgba(0,0,0,0.59)',
                            backgroundBlendMode:'darken',
                                color:'white'
                        }}>
                            <PlayCircleOutlineIcon sx={{width:'100px',height:'100px',...item.playIconStyle?item.playIconStyle:null}}/>
                        </Stack>
                }
            </CardActionArea>
        </Card>
    )
}

export default VideoPlayer;