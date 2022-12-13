import React, {useState, useEffect, MutableRefObject, useContext} from 'react';
import {Card, CardActionArea} from "@mui/material";
import Spacer from "./Spacer";
import {useRef} from "react";
import {useDraggable} from "react-use-draggable-scroll";
import {getImagePath, testImage} from "../../common/utils";
import OwlCarousel from "react-owl-carousel";
import {AppContext} from "../../App";

interface IProps {
    images: string[]
}

const ImageViewer: React.FC<IProps> = (props: IProps) => {
    const [current, setCurrent] = useState(0);
    const {isMobile} = useContext(AppContext)
    const ref=useRef();
    return (
        <div>
            <img src={getImagePath(props.images[current])} style={{width: '100%', height: isMobile?'200px':'500px', objectFit: 'cover',borderRadius:'4px'}}/>




            <Spacer space={1}/>

            <OwlCarousel className='owl-carousel-viewer' loop={false} autoplay={true} items={isMobile ? 3 : 5} margin={30} nav={false}
                         dots={false}>
                {
                    props.images.map((item, i) => {
                        return (
                            <div key={`img-${i}`} className='item'>
                                <Card onClick={()=>setCurrent(i)}>
                                    <CardActionArea>
                                        <img src={getImagePath(item)}
                                             style={{height: '120px', objectFit: 'cover'}}/>
                                    </CardActionArea>
                                </Card>
                            </div>
                        )
                    })
                }
            </OwlCarousel>

        </div>
    )
}

export default ImageViewer;