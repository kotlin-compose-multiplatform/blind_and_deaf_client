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
import {useSearchParams} from "react-router-dom";

const Search = () => {
    const {t}=useTranslation();
    const {isMobile,isBlind}=useContext(AppContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [query,setQuery]=useState(searchParams.get("q"))

    const [data, setData] = useState<INews[] | undefined>()
    const [page, setPage] = useState(1);
    const limit = 20;
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    function getData() {
        // if (page === 1) {
            setLoading(true);
        // }
        AxiosInstance.get(`/search?query=${query}`)
            .then(response => {
                if (response.data && response.data.body && response.data.body.length > 0) {
                    let temp = [...data ? data : [],...response.data.body]
                    setData(temp);
                } else {
                    setHasMore(false)
                }
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                // if (page === 1) {
                    setData(undefined);
                // }
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
                                }}>{query}</Typography>


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

export default Search;