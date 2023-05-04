import React, {useState, useEffect, useContext} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {AboutType, IAbout} from "../../common/Model/Model";
import {AppContext} from "../../App";
import {getImagePath, getLanguageValue} from "../../common/utils";
import {Fonts} from "../../common/theme";
import {Grid} from "@mui/material";
import Image from "mui-image";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface IProps{
    type: AboutType,
    title: string,
    data: IAbout[]
}

const AccordionAbout: React.FC<IProps> = (props) => {
    const [expanded, setExpanded] = React.useState<string | false>(`${props.title}-panel-0`);

    const {appLanguage,isMobile} = useContext(AppContext);


    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <div style={{width:'100%'}}>
            <Typography sx={{mt:2,mb:2,fontFamily: Fonts.AppBold,fontSize:'22px'}}>{props.title}</Typography>
            {
                props.data.filter(item=>item.type==props.type).map((it,i)=>{
                    return(
                        <Accordion key={`${props.title}-key-${i}`} expanded={expanded === `${props.title}-panel-${i}`} onChange={handleChange(`${props.title}-panel-${i}`)}>
                            <AccordionSummary aria-controls={`panel${i}d-content`} id={`panel${i}d-header`}>
                                <Typography>{getLanguageValue(it, 'title',appLanguage)} #{i+1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <img src={getImagePath(it.image)} style={{width: '100%', height: '200px', objectFit: 'contain',borderRadius:'4px'}}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={8}>
                                        <div
                                            style={{maxWidth:'100%',width:'100%',overflow:'auto'}}
                                            dangerouslySetInnerHTML={{__html:getLanguageValue(it, 'desc',appLanguage)}}>
                                        </div>
                                    </Grid>

                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }

        </div>
    )
}

export default AccordionAbout;