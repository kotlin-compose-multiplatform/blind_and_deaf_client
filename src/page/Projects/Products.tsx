import React, {useState, useEffect, useContext} from 'react';
import {Box, Grid, Stack, Typography} from "@mui/material";
import {colors, Fonts} from "../../common/theme";
import LargeNews from "../../components/News/LargeNews";
import Spacer from "../../components/Common/Spacer";
import NewsComponent from "../../components/News/NewsComponent";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import {testData} from "../../common/TestData";
import {INews} from "../../common/Model/Model";
import {AxiosInstance} from "../../common/AxiosInstance";
import {Player} from "@lottiefiles/react-lottie-player";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/State/Loading";
import Empty from "../../components/State/Empty";

interface IProps{
    is_product:boolean,
    is_project: boolean
}

const Products = (props: IProps) => {
    const {t}=useTranslation();
    const {isMobile,isBlind}=useContext(AppContext);

    const [data, setData] = useState<INews[] | undefined>()
    const [page, setPage] = useState(1);
    const limit = 20;
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    function getData() {
        if (page === 1) {
            setLoading(true);
        }
        AxiosInstance.get(`/get-client-news?page=${page}&limit=${limit}&is_project=${props.is_project}&is_product=${props.is_product}`)
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
        getData()
    }, [page])
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])
    return (
        <div>
            {
                loading?
                    <Loading/>
                    :
                    <div>
                        {data && data.length > 0 ?
                            <Stack sx={{pt: 4, pb: 4}} spacing={4}>
                                <Typography sx={{
                                    color: colors.titleColor,
                                    fontSize: '26px',
                                    width: '70%',
                                    fontFamily: Fonts.AppBold
                                }}>{t('products')}</Typography>

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
                                    <Grid container rowSpacing={2} columnSpacing={1}>
                                        {
                                            data.map((item, i) => {
                                                return (
                                                    <Grid item xs={6} sm={6} md={4} key={`news-${i}`}>
                                                        <div style={{width: '94%'}}>
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
                    </div>
            }
        </div>
    )
}

export default Products;