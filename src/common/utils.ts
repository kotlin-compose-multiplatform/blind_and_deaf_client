import it from "node:test";
import striptags from "striptags";
import { BASE_URL_2 } from "./AxiosInstance";
import { OurProject } from "./Model/Model";

export function valueChecker(value: any) {
    try {
        let it = value[0];
        console.log(value);
        return value;
    } catch (err) {
        return [];
    }
}

export function getImagePath(name: string) {
    return `${BASE_URL_2}/${name}`;
}

export function getVideoPath(name: string) {
    return `${BASE_URL_2}/${name}`;
}

export function getOtherPath(name: string) {
    return `${BASE_URL_2}/${name}`;
}

export const convertTimeStampToDate = (s: string) => {
    let d = new Date(s);
    let month = d.getMonth() + 1;
    return `${d.getDate() < 10 ? '0' : ''}${d.getDate()}-${month < 10 ? '0' : ''}${month}-${d.getFullYear()}`;
}

export const convertTimeStampToTime = (s: string) => {
    let d = new Date(s);
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

export const convertDateAndTime = (s: string) => {
    return `${convertTimeStampToDate(s)} ${convertTimeStampToTime(s)}`
}


export function checkValue(value: any) {
    try {
        if (!value || typeof value === 'undefined' || value === null || value === '') {
            return ''
        } else {
            return value
        }
    } catch (e) {
        return '';
    }
}



export function getLanguageValue(item: any, key: string, lang: string | undefined) {
    if (lang && typeof lang !== 'undefined' && lang !== null && lang !== '') {
        return item[`${key}_${lang}`]
    } else {
        return item[`${key}_en`]
    }
}

export function cleanHtml(html: string) {
    if (html && typeof html !== 'undefined' && html !== '') {
        return striptags(html, [], "").trim().replaceAll("&nbsp;", " ")
        //
    } else {
        return '';
    }
}


export function subString(s: string, lenght: number) {
    if (s && typeof s !== 'undefined' && s !== null && s !== '') {
        if (s.length < lenght) {
            return s;
        } else {
            return `${s.substring(0, lenght)}...`;
        }
    } else {
        return '';
    }

}

export function getProjectImages(projects: OurProject[]) {
    try {
        if (projects && projects.length > 0) {
            if (projects.length >= 5) {
                return projects.map((item, i) => {
                    return [item.first_image]
                })
            } else {
                return projects.map((item, i) => {
                    return [item.first_image, ...item.files ? item.files.slice(2, item.files.length).filter((item2, i2) => item2.mime_type == 1).map(it => it.url).slice(0, 2) : []]
                })
            }
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}


export function getProjectVideos(projects: OurProject[]) {
    try {
        if (projects && projects.length > 0) {
            if (projects.length >= 2) {
                return projects.map((item, i) => {
                    return [item.video_file]
                })
            } else {
                return projects.map((item, i) => {
                    return [item.video_file, ...item.files ? item.files.slice(2, item.files.length).filter((item2, i2) => item2.mime_type == 0).map(it => it.url).slice(0, 2) : []]
                })
            }
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}

export function getUrlByIndex(images: string[][], index: number) {
    try {
        if (index === 1) {

        }
    } catch (err) {
        return "";
    }
}

export const testImage = `https://www.findatopdoc.com/var/fatd/storage/images/_aliases/article_main/topdoctoday/doctor-reputation/the-best-doctors-are-teachers/3796255-1-eng-US/The-Best-Doctors-Are-Teachers.jpg`;
export const testImage2 = `https://www.nationaldb.org/media/img/Devin_and_Courtney_2_1.jpg`;
export const logoImage = `https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png`

export const innerHTML = `<p><span style="color: rgba(0, 0, 0, 0.87); font-family: AppLight; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><strong style="font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong></span></p>
<p><span style="color: rgba(0, 0, 0, 0.87); font-family: AppLight; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><strong style="font-size: 18px;"><br></strong></span></p>
<p><span style="color: rgba(0, 0, 0, 0.87); font-family: AppLight; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><strong style="font-size: 18px;"><img src="https://news.illinoisstate.edu/files/2016/08/onlinekristiprobst.jpg" alt="" width="673" style="display: block; margin-left: auto; margin-right: auto;" height="449"></strong></span></p>
<p><span style="color: rgba(0, 0, 0, 0.87); font-family: AppLight; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><strong style="font-size: 18px;"><br></strong></span></p>
<p><span style="color: rgba(0, 0, 0, 0.87); font-family: AppLight; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><strong style="font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong></span></p>
<p><span style="color: rgba(0, 0, 0, 0.87); font-family: AppLight; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><strong style="font-size: 18px;"><br></strong></span></p>`;

export const lorem = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`