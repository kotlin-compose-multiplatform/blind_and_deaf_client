import {createTheme} from "@mui/material";

export const Fonts = {
    AppBold:"AppBold",
    AppExtraBold:"AppExtraBold",
    AppExtraLight:"AppExtraLight",
    AppLight:"AppLight",
    AppMedium:"AppMedium",
    AppRegular:"AppRegular",
    AppSemiBold:"AppSemiBold",
}

export const colors = {
    dark: "#012A4A",
    descriptionColor:"rgba(0, 0, 0, 0.6)",
    titleColor:"rgba(0, 0, 0, 0.87)",
    primary: "#19A3DD",
    white: "#FFFFFF",
    black: "#000000",
    passiveBg:"#F1F1F1",
    passiveText:'#8C8C8C'
}

const theme = createTheme(
    {
        typography: {
            fontFamily: Fonts.AppRegular,
        },
        palette: {
            mode: "light",
            primary: {
                light: "#67d4ff",
                main: "#19A3DD",
                dark: "#0074ab"
            },
            secondary: {
                main: "#012A4A",
                light: "#365276",
                dark: "#000023"
            }
        }
    }
);


export const ImageStyle={
    width:'100px',
    height:'100px'
}





export default theme;