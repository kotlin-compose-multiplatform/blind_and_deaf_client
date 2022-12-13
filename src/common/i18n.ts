import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "home_page": "Home",
            "news":"News",
            "projects":"Projects",
            "about":"About us",
            "for_blind":"For the visually impaired",
            "latest_news":"Latest news",
            "search":"Search...",
            "our_projects":"Our Projects",
            "our_projects_desc":lorem,
            "about_us_desc":lorem,
            "show_all_projects":"SHOW ALL PROJECTS",
            "our_achieve":"Our achievements",
            "step":"Step",
            "learn_more":"LEARN MORE",
            "our_certificate":"Our certificate",
            "our_contacts":"Our contacts in regions",
            "contact_desc":lorem,
            "our_partners":"Our partners",
            "contacts":"Contacts",
            "contacts_desc":lorem,
            "your_name":"Your name*",
            "first_name":"first name",
            "input_field":"Input field*",
            "your_email":"your email",
            "your_message":"Your message*",
            "message":"message",
            "send":"SEND",
            "newsletter":"Newsletter",
            "newsletter_desc":lorem,
            "enter_mail":"Enter your email",
            "submit":"Submit",
            "our_phone":"Our phone number",
            "our_email":"Email address",
            "all_right":"All Rights Reserved",
            "footer_desc":lorem,
            "menu":"Menu",
            "today_news":"Today's news",
            "about_desc":"We'll ensure you always get\n" +
                " best results",
            "about_desc_2":lorem,
            "nodata":"No data",
            "end_of_data":"No more data!",
            "views":"Views",
            "enter_full":"Please enter all information!",
            "error":"Something went wrong!",
            "success":"Successfully sent!",
            "balkanName":"Balkan",
            "balkanAddress":"Balkan address",
            "dzName":"Dashoguz",
            "dzAddress":"Dashoguz address",
            "lbName":"Lebap",
            "lbAddress":"Lebap address",
            "ahName":"Ahal",
            "ahAddress":"Ahal address",
            "mrName":"Mary",
            "mrAddress":"Mary address",
            "agName":"Ashgabat",
            "agAddress":"Ashgabat address"
        }
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;