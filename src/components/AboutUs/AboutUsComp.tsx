import React, {useState, useEffect, useContext} from 'react';
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {Button, Card, CardActionArea, Grid, Paper, Skeleton, Stack, Typography} from "@mui/material";
import {colors, Fonts} from "../../common/theme";
import StepContent from "@mui/material/StepContent";
import VideoPlayer from "../Common/VideoPlayer";
import {lorem, testImage} from "../../common/utils";
import Image from "mui-image";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import Spacer from "../Common/Spacer";
import {useNavigate} from "react-router-dom";

const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];

export const AboutStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const {t} = useTranslation();
    const {isMobile, isBlind} = useContext(AppContext);

    return (
        <Box sx={{maxWidth: 400}}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            <Typography
                                sx={{color: colors.titleColor, fontSize: '14px', fontFamily: Fonts.AppBold}}>
                                {step.label}
                            </Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography sx={{
                                color: colors.descriptionColor,
                                fontSize: '14px',
                                fontFamily: Fonts.AppRegular
                            }}>{step.description}</Typography>
                            <Card elevation={0} sx={{mt: 1, mb: 1}}>
                                <CardActionArea>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            <VideoPlayer
                                                src={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}
                                                playIconStyle={{width: '40px', height: '40px'}}
                                                altImage={'/images/about/video_placeholder.png'}
                                                style={{width: '100%', height: '120px', borderRadius: '4px'}}/>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Stack spacing={2}>
                                                <Typography sx={{
                                                    color: colors.titleColor,
                                                    fontSize: '14px',
                                                    fontFamily: Fonts.AppSemiBold
                                                }}>
                                                    Name of event
                                                </Typography>
                                                <Typography sx={{
                                                    color: colors.descriptionColor,
                                                    fontSize: '16px',
                                                    fontFamily: Fonts.AppRegular
                                                }}>
                                                    {lorem.substring(0, 50)}
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </CardActionArea>
                            </Card>
                            <Box sx={{mb: 2}}>
                                <div>
                                    <Button
                                        variant="contained"

                                        onClick={handleNext}
                                        sx={{
                                            mt: 1, mr: 1,
                                            color: colors.white, fontSize: '14px', fontFamily: Fonts.AppMedium
                                        }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{
                                            mt: 1, mr: 1,
                                            color: colors.titleColor, fontSize: '14px', fontFamily: Fonts.AppBold
                                        }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{p: 3}}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    )
}

export const HomeAboutUs = () => {
    const {t} = useTranslation();
    const {isMobile, isBlind} = useContext(AppContext);
    const navigator=useNavigate()
    return (
        <Stack spacing={2} alignItems={'center'}>
            <Typography sx={{
                color: colors.titleColor, fontFamily: Fonts.AppBold, textAlign: 'center', fontSize:
                    isBlind ? '60px' :
                        isMobile ? '32px' : '55px'
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

            <Grid container spacing={isMobile ? 0 : 4}>
                <Grid item xs={12} sm={12} md={4}>
                    <Card>
                        <CardActionArea>
                            <Image src={'/images/about/Photo.jpg'} style={{height: isMobile ? '300px' : '600px'}}
                                   showLoading={<Skeleton variant="rectangular" width={'100%'}
                                                          sx={{height: isMobile ? '300px' : '600px'}}/>}/>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    {isMobile ? <Spacer space={2}/> : null}
                    <Typography sx={{
                        color: colors.titleColor, fontFamily: Fonts.AppBold, fontSize:
                            isBlind ? '30px' :
                                isMobile ? '20px' : '24px',
                        width: isMobile ? '100%' : '50%'
                    }}>
                        {t('our_achieve')}
                    </Typography>
                    <Spacer space={1}/>
                    <AboutStepper/>

                </Grid>
            </Grid>
            <Button onClick={()=>navigator('/about')} variant={'contained'} sx={{
                fontSize: '14px',
                color: 'white',
                textTransform: 'none',
                fontFamily: Fonts.AppMedium
            }}>
                {t('learn_more')}
            </Button>

        </Stack>
    )
}

const AboutUsComp = () => {
    return (
        <div>

        </div>
    )
}

export default AboutUsComp;