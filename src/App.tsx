import "./App.css";
import About from "./page/About/About";
import Home from "./page/Home/Home";
import Index from "./page/Index/Index";
import News from "./page/News/News";
import NewsView from "./page/News/NewsView";
import ProjectView from "./page/Projects/ProjectView";
import Projects from "./page/Projects/Projects";
import React, { createContext, useEffect, useState } from "react";
import Search from "./page/Search/Search";
import theme from "./common/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, useMediaQuery, useTheme } from "@mui/material";
import {ToastContainer} from "react-toastify";

export function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output: any, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
}

export interface ContextProps{
    isMobile?:boolean,
    isBlind?:boolean,
    changeBlind?:(blind: boolean)=> void,
    appLanguage?: string
}
export const AppContext = createContext<ContextProps>({});
function App() {

    // console.log=()=>{}
    console.error=()=>{}
    console.warn=()=>{}
    console.info=()=>{}

    const wwidth = useWidth();

    const [appLanguage,setAppLanguage] = useState('en');

    const checker = (w: string) => {
        return ["xs", "sm"].includes(w);
    }
    const [isMobile, setIsMobile] = useState(checker(wwidth));

    const [isBlind,setIsBLind]=useState(false);

    function changeBlind(blind:boolean){
        setIsBLind(blind);
    }

    useEffect(()=>{
        setIsMobile(checker(wwidth))
    },[wwidth])
    return (
       <AppContext.Provider value={{
           isMobile:isMobile,
           isBlind:isBlind,
           changeBlind:changeBlind,
           appLanguage:appLanguage
       }}>
           <ThemeProvider theme={theme}>
               <BrowserRouter>
                   <Routes>
                       <Route path={'/'} element={<Index/>}>
                           <Route index element={<Home/>}/>
                           <Route path={'/news'} element={<News/>}/>
                           <Route path={'/view/:id'} element={<NewsView/>}/>
                           <Route path={'/projects'} element={<Projects/>}/>
                           {/*<Route path={'/projects/:id'} element={<ProjectView/>}/>*/}
                           <Route path={'/about'} element={<About/>}/>
                           <Route path={'/search'} element={<Search/>}/>
                       </Route>
                   </Routes>
               </BrowserRouter>
           </ThemeProvider>
           <ToastContainer/>
       </AppContext.Provider>
    );
}

export default App;
