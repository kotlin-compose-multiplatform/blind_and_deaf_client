import React, {useState, useEffect, useContext} from 'react';
import {Typography, Stack, Grid, Divider, Box, CircularProgress} from "@mui/material";
import {colors, Fonts} from "../../common/theme";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import LargeNews from "../../components/News/LargeNews";
import Spacer from "../../components/Common/Spacer";
import NewsComponent from "../../components/News/NewsComponent";
import InfiniteScroll from 'react-infinite-scroll-component';
import {Player} from "@lottiefiles/react-lottie-player";
import {GBody, INews, IPagination} from "../../common/Model/Model";
import Empty from "../../components/State/Empty";
import {AxiosInstance} from "../../common/AxiosInstance";
import Loading from "../../components/State/Loading";
import {testData} from "../../common/TestData";

const News = () => {
    const {t} = useTranslation();
    const {isMobile, isBlind} = useContext(AppContext);
    const [length, setLength] = useState(27);
    const [data, setData] = useState<INews[] | undefined>()
    const [similar, setSimilar] = useState<INews[] | undefined>()
    const [page, setPage] = useState(1);
    const limit = 20;
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    function getSimilar() {
        AxiosInstance.get(`/get-client-news?page=${page}&limit=${limit}&is_project=true&is_product=false`)
            .then(response => {
                if (response.data && response.data.body && response.data.body.data && response.data.body.data.length > 0) {
                    let temp = similar ? similar : []
                    temp.push(...response.data.body.data);
                    setSimilar(temp);
                } else {
                    // setHasMore(false)
                }
            })
            .catch(err => {
            })
    }

    function getData() {
        if (page === 1) {
            setLoading(true);
        }
        AxiosInstance.get(`/get-client-news?page=${page}&limit=${limit}&is_project=false&is_product=false`)
            .then(response => {
                if (response.data && response.data.body && response.data.body.data && response.data.body.data.length > 0) {
                    let temp = [...data ? data : [],...response.data.body.data]
                    setData(temp);
                } else {
                    setHasMore(false)
                }
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                if (page === 1) {
                    setData(undefined);
                }
            })
    }

    useEffect(() => {
        getSimilar()
    }, [])

    useEffect(() => {
        getData()
    }, [page])
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])


    return (
        <Stack sx={{pt: 4, pb: 4}} spacing={4}>
            {
                loading ?
                    <Loading/>
                    :

                    data && data.length > 0 ?
                        <Stack spacing={4}>
                            <Typography sx={{
                                color: colors.titleColor,
                                fontSize: '26px',
                                width: '70%',
                                fontFamily: Fonts.AppBold
                            }}>{t('today_news')}</Typography>

                            <Grid container>
                                <Grid item xs={12} sm={12} md={8}>
                                    <LargeNews item={data[0]}/>
                                    <Spacer space={1}/>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <NewsComponent onlyText={false} item={data[1]}/>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <NewsComponent onlyText={false} item={data[2]}/>
                                        </Grid>
                                    </Grid>
                                    <Spacer space={1}/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Stack spacing={2} sx={{ml: isMobile ? 0 : 2}}>
                                        {
                                            similar && similar.length > 0 ?
                                                similar.map((item, i) => {
                                                    return (
                                                        <NewsComponent onlyText={true} item={item}/>
                                                    )
                                                }) : null
                                        }
                                    </Stack>
                                </Grid>
                            </Grid>
                            {
                                isMobile ? null :
                                    <Box sx={{width: '100%', height: '0.2px', background: colors.passiveText}}/>
                            }
                            <Spacer space={2}/>
                            <InfiniteScroll
                                dataLength={data.length}
                                hasMore={hasMore}
                                loader={<Stack sx={{width: '100%'}} alignItems={'center'} justifyContent={'center'}>
                                    <Player src={'/images/final.json'} style={{width: '150px'}} autoplay loop/>
                                </Stack>}
                                endMessage={
                                    <p style={{textAlign: 'center'}}>
                                        <b>{t('end_of_data')}</b>
                                    </p>
                                }
                                refreshFunction={() => {
                                }}
                                pullDownToRefresh
                                pullDownToRefreshThreshold={50}
                                pullDownToRefreshContent={
                                    <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                                }
                                releaseToRefreshContent={
                                    <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                                }
                                next={() => {
                                    let t = page + 1;
                                    setPage(t);
                                }}>
                                <Grid container rowSpacing={2} columnSpacing={1} alignItems={'flex-start'}
                                      justifyContent={'flex-start'}>
                                    {
                                        data.map((item, i) => {
                                            return (
                                                <Grid item xs={6} sm={6} md={4} key={`news-${i}`}>
                                                    <div style={{width: '95%'}}>
                                                        <NewsComponent onlyText={false} item={item}/>
                                                    </div>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </InfiniteScroll>


                            <Spacer space={4}/>
                        </Stack>
                        :
                        <Empty/>

            }

        </Stack>
    )
}

export default News;