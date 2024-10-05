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
            "our_projects_desc":"Society of the Blind and Deaf of Turkmenistan (hereinafter the Society) - neighborhood\n" +
                "is a social association of disabled people of I-II groups and hearing disabled people, and acts in the field of voluntary, equality, self-management principles and general advantageous civil, life, cultural and other rights on the basis of joint legislation.",
            "about_us_desc":`The Blind and Deaf Society of Turkmenistan (BDST) is a public organization of the visually and hearing impaired people, operating on the basis of voluntariness, equality, self-government and legality. The main goal and objectives of the society is to protect the rights and interests of its members`,
            "show_all_projects":"SHOW ALL PROJECTS",
            "our_achieve":"Our achievements",
            "step":"Step",
            "learn_more":"LEARN MORE",
            "our_certificate":"Our certificate",
            "our_contacts":"Our contacts in regions",
            "contact_desc":`On our website you will find complete information about the activities of the Society, services for the professional and social rehabilitation of the visually and hearing impaired, their adaptation to society, involvement in work, education, culture and sports, and you can also get information about the products manufactured by Training Production Enterprises of the Society.`,
            "our_partners":"Our partners",
            "contacts":"Contacts",
            "contacts_desc":`On our website you will find complete information about the activities of the Society, services for the professional and social rehabilitation of the visually and hearing impaired, their adaptation to society, involvement in work, education, culture and sports, and you can also get information about the products manufactured by Training Production Enterprises of the Society.`,
            "your_name":"Your name*",
            "first_name":"first name",
            "input_field":"Input field*",
            "your_email":"your email",
            "your_message":"Your message*",
            "message":"message",
            "send":"SEND",
            "newsletter":"Newsletter",
            "newsletter_desc":`On our website you will find complete information about the activities of the Society, services for the professional and social rehabilitation of the visually and hearing impaired, their adaptation to society, involvement in work, education, culture and sports, and you can also get information about the products manufactured by Training Production Enterprises of the Society.`,
            "enter_mail":"Enter your email",
            "submit":"Submit",
            "our_phone":"Our phone number",
            "our_email":"Email address",
            "all_right":"All Rights Reserved",
            "footer_desc":`On our website you will find complete information about the activities of the Society, services for the professional and social rehabilitation of the visually and hearing impaired, their adaptation to society, involvement in work, education, culture and sports, and you can also get information about the products manufactured by Training Production Enterprises of the Society.`,
            "menu":"Menu",
            "today_news":"Today's news",
            "about_desc":`Structure of the Society of the Blind and Deaf of Turkmenistan`,
            "about_desc_2":`On our website you will find complete information about the activities of the Society, services for the professional and social rehabilitation of the visually and hearing impaired, their adaptation to society, involvement in work, education, culture and sports, and you can also get information about the products manufactured by Training Production Enterprises of the Society.`,
            "nodata":"No data",
            "end_of_data":"No more data!",
            "views":"Views",
            "enter_full":"Please enter all information!",
            "error":"Something went wrong!",
            "success":"Successfully sent!",
            "balkanName":"Balkan",
            "balkanAddress":"Balkan velayat, Balkanabat city, Residential complex 136, house number 11 / Balkan velayat, Gyzylarbat district, Gok Abaev street, house number 69 / Balkan velayat, Turkmenbashi city, Makhtumkuli street, building No. 76-B",
            "dzName":"Dashoguz",
            "dzAddress":"Dashoguz velayat, Dashoguz city, Oguzkhan street, building No. 16",
            "lbName":"Lebap",
            "lbAddress":"Lebap velayat,\n" +
                "Turkmenabat, st. Bitarap\n" +
                "Turkmenistan, house\n" +
                "number 201\n / Lebap velayat, Kerki city, Galkynysh street, house number 2",
            "ahName":"Ashgabat city",
            "ahAddress":"Ashgabat city, Buzmeinsky district, street 2068 (A.Kekilov),",
            "mrName":"Mary",
            "mrAddress":"Mary velayat, Mary city, Peshanaly street, building No. 6 / Mary velayat, Bayramali city, Salikhov street, house number 18",
            "agName":"Ashgabat city",
            "agAddress":"Ashgabat city, Buzmeinsky district, street 2068 (A.Kekilov),",

            "finish":"Finish",
            "continue":"Continue",
            "back":"Back",
            "completed":`All steps completed`,
            "reset":`Reset`,
            "step-1-title":`CONGRESS`,
            "step-1-desc":`CENTRAL REVISION / CENTRAL BOARD / STAFF OF THE CENTRAL BOARD`,
            "step-2-title":`General meeting`,
            "step-2-desc":`General meeting / Audit Commission of the Software / SCP,
MTS base,
IBS`,
            "step-3-title":`General meeting`,
            "step-3-desc":`PO board / Group by`,
            "last":"Last",
            "products":"Our Products",
            "about_1":"POSITION\n" +
                "About the primary organizations of the society of the blind and deaf of Turkmenistan and their groups",
            "parts":"Structure of the Turkmen Society of the Blind and Deaf (BDST)",
            "other_about":"More information about us",
            "links":"Links"
        },
    },
    ru: {
        translation: {
            "home_page": "Главная",
            "news":"Новости",
            "projects":"Проекты",
            "about":"О нас",
            "for_blind":"Для слабовидящих",
            "latest_news":"Последние новости",
            "search":"Поиск...",
            "our_projects":"Наши проекты",
            "our_projects_desc":`Общество слепых и глухих Туркменистана (далее «Общество»)  является
общественной организацией инвалидов 1 и 2 группы по зрению и инвалидов по слуху и действует по принципу добровольности, равноправия, самоуправления и законности на основе общности интересов для совместной реализации гражданских, социальных, культурных и иных прав.\t\t\t\t
`,
            "about_us_desc":`Приветствуем Вас на официальном сайте Общества слепых и глухих Туркменистана!
Общество слепых и глухих Туркменистана (ОСГТ) – общественная организация инвалидов по зрению  слуху, действующая на основе добровольности, равноправия, самоуправления и законности. Основной целью и задачами общества является защита прав и интересов своих членов.
`,
            "show_all_projects":"Все проекты",
            "our_achieve":"Наша цель",
            "step":"Шаг",
            "learn_more":"Узнать больше",
            "our_certificate":"Наши сертификаты",
            "our_contacts":"Наши контакты",
            "contact_desc":`По предложению  правления  «Организации», Центральное правление
рассматривает и принимает решение об образовании групп в населенных пунктах, где количество проживающих членов «Общества» превышает 50 человек. Группа подотчетна правлению «Организации».\t\t\t\t
`,
            "our_partners":"Наши партнеры",
            "contacts":"Связаться с нами",
            "contacts_desc":`Общество слепых и глухих Туркменистана (далее «Общество»)  является
общественной организацией инвалидов 1 и 2 группы по зрению и инвалидов по слуху и действует по принципу добровольности, равноправия, самоуправления и законности на основе общности интересов для совместной реализации гражданских, социальных, культурных и иных прав.\t\t\t\t
`,
            "your_name":"Ваше имя*",
            "first_name":"Имя",
            "input_field":"Электронная почта*",
            "your_email":"Ваш адрес электронной почты",
            "your_message":"Сообщение*",
            "message":"Введите сообщение",
            "send":"Отправлять",
            "newsletter":"Новостная рассылка",
            "newsletter_desc":`Подпишитесь, чтобы быть в курсе наших новостей. Так вы не пропустите наши последние новости!`,
            "enter_mail":"Введите адрес электронной почты",
            "submit":"Отправлять",
            "our_phone":"Наш номер телефона",
            "our_email":"Наша электронная почта",
            "all_right":"Все права защищены",
            "footer_desc":`Общество слепых и глухих Туркменистана (ОСГТ) – общественная организация инвалидов по зрению  слуху, действующая на основе добровольности, равноправия, самоуправления и законности. Основной целью и задачами общества является защита прав и интересов своих членов. `,
            "menu":"Меню",
            "today_news":"Сегодняшние новости",
            "about_desc":"Структура Общества слепых и глухих Туркменистана (ОСГТ)",
            "about_desc_2":`На нашем веб-сайте вы найдете полную информацию о деятельности Общества, услугах по профессиональной и социальной реабилитации инвалидов по зрению и слуху, их адаптации в общество, вовлечение в работу, образование, культуру и спорт, а также сможете получить информацию о продукции, выпускаемой Учебно-производственными предприятиями Общества.`,
            "nodata":"Нет данных",
            "end_of_data":"Конец данных!",
            "views":"Просмотры",
            "enter_full":"Введите необходимую информацию!",
            "error":"Что-то пошло не так!",
            "success":"Успешно отправлено!",
            "balkanName":"Балканский велаят",
            "balkanAddress":`Балканский велаят, г. Балканабад, Жилой комплекс 136 / Балканский велаят, Гызыларбатский этрап, улица Гок Абаева, дом № 69 / Балканский велаят, г. Туркменбаши, улица Махтумкули`,
            "dzName":"Дашогузский велаят",
            "dzAddress":`Дашогузский велаят, г. Дашогуз, улица Огузхана, дом № 16`,
            "lbName":"Лебапский велаят ",
            "lbAddress":`Лебапский велаята, г.
Туркменабат, ул. Битарап
Туркменистан, дом №
201 / Лебапский велаят, город Керки, улица Галкыныш, дом № 2
`,
            "ahName":"Ахалский велаят",
            "ahAddress":`Ахалский велаят г. Ашхабад, Бузмеинский района, улица 2068 (А.Кекилова), дом № 49`,
            "mrName":"Марыйский велаят",
            "mrAddress":`Марыйский велаят, г.
Мары, улица Пешаналы,
дом № 6
 / Марыйский велаят, г.
Байрамали, улица Салихова, дом № 18
`,
            "agName":"город Ашхабад",
            "agAddress":"Ахалский велаят г. Ашхабад, Бузмеинский района, улица 2068 (А.Кекилова), дом № 49",

            "finish":"Заканчивать",
            "continue":"Продолжать",
            "back":"Назад",
            "completed":`Все шаги завершены`,
            "reset":`Перезагрузить`,
            "step-1-title":`СЪЕЗД`,
            "step-1-desc":`ЦЕНТРАЛЬНАЯ 
РЕВИЗИОННАЯ  / ЦЕНТРАЛЬНОЕ  ПРАВЛЕНИЕ / АППАРАТ ЦЕНТРАЛЬНОГО ПРАВЛЕНИЯ`,
            "step-2-title":`Общее собрание`,
            "step-2-desc":`Общее собрание / Ревизионная комиссия ПО  / УПП,
База МТС, 
СРК
 УПП – Учебно-производственное предприятие
База МТС – База материально-технического снабжения
СРК – Социально-реабилитационный комплекс  
ППО –  первичная организация

)`,
            "step-3-title":`Общее собрание`,
            "step-3-desc":`Правление ПО / Группа ПО`,
            "last":"Последний",
            "products":"Наши продукты",
            "about_1":"ПОЛОЖЕНИЕ\n" +
                "О первичных организациях общества слепых и глухих Туркменистана и их группах\n",
            "parts":"Структура Туркменского общества слепых и глухих (ОСГТ)",
            "other_about":"Больше информации о нас",
            "links":"Ссылки"
        },
    },
    tm: {
        translation: {
            "home_page": "Baş sahypa",
            "news":"Täzelikler",
            "projects":"Taslamalar",
            "about":"Biz barada",
            "for_blind":"Görüşi pesler üçin",
            "latest_news":"Soňky täzelikler",
            "search":"Gözleg...",
            "our_projects":"Biziň taslamalar",
            "our_projects_desc":`Türkmenistanyň  Körler  we kerler  jemgyýeti  (mundan  beýläk  Jemgyýet)  –  görşi
            boýunça I-II topardaky maýyplaryň we eşidişi taýdan maýyplaryň jemgyýetçilik birleşigi bolup, meýletinlik, deňhukuklylyk, öz-özüňi dolandyrmak ýörelgeleri we umumy bähbitli raýat, durmuş, medeni we gaýry hukuklary bilelikde kanunçylyk esasynda amala aşyrmak babatda hereket edýär.`,
            "about_us_desc":`Sizi Türkmenistanyň Körler we kerler jemgyýetiniň resmi web-sahypasynda hoş gördük!
Türkmenistanyň Körler we kerler jemgyýeti (TKKJ) – görüş we eşidiş taýdan maýyplaryň jemgyýetçilik birleşigi bolup, meýletinlik, deňhukuklylyk, öz-özüňi dolandyrmak we kanunçylyk esasynda hereket edýär. Jemgyýetiň esasy maksady öz agzalarynyň hukuklaryny we bähbitlerini goramak.
`,
            "show_all_projects":"Ähli taslamalar",
            "our_achieve":"Biziň maksadymyz",
            "step":"Basgyç",
            "learn_more":"Has köp",
            "our_certificate":"Biziň sertifikatlarymyz",
            "our_contacts":"Ýurdumyzdaky nokatlarymyz",
            "contact_desc":`Guramanyň  müdirliginiň  teklibi  bilen,  Jemgyýetiň  Merkezi  müdirligi  ýaşaýyş
ýerlerinde Jemgyýetiň agzalarynyň sany 50-den agdyklyk edeninde topar döretmek meselesine garaýar we karar kabul edýär. Topar Guramanyň müdirligine hasabatly bolýar.`,
            "our_partners":"Hyzmatdaşlarymyz",
            "contacts":"Habarlaşmak",
            "contacts_desc":`Türkmenistanyň  Körler  we kerler  jemgyýeti  (mundan  beýläk  Jemgyýet)  –  görşi
            boýunça I-II topardaky maýyplaryň we eşidişi taýdan maýyplaryň jemgyýetçilik birleşigi bolup, meýletinlik, deňhukuklylyk, öz-özüňi dolandyrmak ýörelgeleri we umumy bähbitli raýat, durmuş, medeni we gaýry hukuklary bilelikde kanunçylyk esasynda amala aşyrmak babatda hereket edýär.`,
            "your_name":"Siziň adyňyz*",
            "first_name":"Adyňyz",
            "input_field":"Email*",
            "your_email":"Elektron poçtaňyz",
            "your_message":"Hatyňyz*",
            "message":"Hatyňyzy giriziň",
            "send":"Ugrat",
            "newsletter":"Täzeliklere ýazylmak",
            "newsletter_desc":`Täzeliklerden habarsyz galmazlyk üçin bize ýazylyň. Şeýle edilen ýagdaýynda bizdäki iň soňky täzeliklerden habarsyz galmarsyňyz!`,
            "enter_mail":"Email giriziň",
            "submit":"Ugrat",
            "our_phone":"Biziň telefon belgimiz",
            "our_email":"Elektron poçtamyz",
            "all_right":"Ähli hukuklar goragly",
            "footer_desc":`Türkmenistanyň Körler we kerler jemgyýeti (TKKJ) – görüş we eşidiş taýdan maýyplaryň jemgyýetçilik birleşigi bolup, meýletinlik, deňhukuklylyk, öz-özüňi dolandyrmak we kanunçylyk esasynda hereket edýär. Jemgyýetiň esasy maksady öz agzalarynyň hukuklaryny we bähbitlerini goramak.`,
            "menu":"Menýu",
            "today_news":"Bügünki täzelikler",
            "about_desc":"Türkmenistanyň Körler we kerler jemgyýetiniň (TKKJ) gurluşy",
            "about_desc_2":`Biziň web sahypamyzda Siz, Jemgyýetiň alyp barýan işleri barada, görüş we eşidiş taýdan maýyplara berilýän hünär we durmuş taýdan dikeldiş işleri, olaryň jemgyýete uýgunlaşmagy, zähmete, bilime, medeniýete we sporta çekilmekleri, şeýle-de Jemgyýetiň Okuw-önümçilik kärhanalarynyň öndürýän önümleri barada doly maglumat alyp bilersiňiz.`,
            "nodata":"Maglumat ýok",
            "end_of_data":"Maglumat soňy!",
            "views":"Görülme",
            "enter_full":"Gerekli maglumatlary giriziň!",
            "error":"Ýalňyşlyk ýüze çykdy!",
            "success":"Üstünlikli ugradyldy!",
            "balkanName":"Balkan",
            "balkanAddress":`Balkan welaýaty, Balkanabat şäheri, 136 ýaşaýyş jaý toplumy, 11 jaýy / Balkan welaýaty, Gyzylarbat etraby, Gök Abaýew köçesi, 69-njy jaýy / Balkan welaýaty, Türkmenbaşy şäheri , Magtymguly köçesi, 76-B jaýy`,
            "dzName":"Daşoguz",
            "dzAddress":`Daşoguz welaýaty, Daşoguz şaheri, Oguzhan köçesi, 16- njy jaýy`,
            "lbName":"Lebap",
            "lbAddress":`Lebap welaýaty,
Türkmenabat şäheri,
Bitarap Türkmenistan
köçesi, 201 jaýy
 / Lebap welaýaty, Kerki şäheri, Galkynyş köçesi, 2- nji jaýy`,
            "ahName":"Aşgabat şäheri",
            "ahAddress":"Aşgabat şäheri, Büzmeýin\n"+
                "etraby, 2068 (A.Kekilow)\n" +
                "köçesi, 49 jaýy",
            "mrName":"Mary",
            "mrAddress":`Mary welaýaty, Mary şäheri, Peşanaly ýoly, 6-njy jaýy / Mary welaýaty, Baýramaly şäheri, Salyhow köçesi, 18- nji jaýy`,
            "agName":"Aşgabat şäheri",
            "agAddress":"Aşgabat şäheri, Büzmeýin\n"+
                "etraby, 2068 (A.Kekilow)\n" +
                "köçesi, 49 jaýy",

            "finish":"Soňy",
            "continue":"Indiki",
            "back":"Yza dolan",
            "completed":`Ähli ädimler tamamlandy`,
            "reset":`Täzeden`,
            "step-1-title":`GURULTAÝ`,
            "step-1-desc":`MERKEZI DERŇEW TOPARY / MERKEZI MÜDIRLIK / MERKEZI MÜDIRLIGIŇ APPARATY`,
            "step-2-title":`MERKEZI MÜDIRLIK`,
            "step-2-desc":`Umumy ýygnak / IG derňew topary / OÖK,MTÜ Bazasy, DTDT (OÖK  – Okuw-önümçilik kärhanasy
MTÜ Bazasy  – Material-tehniki üpjünçilik bazasy
DTDT  – Dürmuş taýdan dikeldiş toplumy 
)`,
            "step-3-title":`Umumy ýygnak`,
            "step-3-desc":`IG müdirligi / IG topary (Ilkinji guramasy)`,
            "last":"Iň soňky",
            "products":"Biziň önümlerimiz",
            "about_1":"Türkmenistanyň Körler we kerler jemgyýetiniň\n" +
                "Ilkinji guramalarynyň we olaryň Toparlarynyň\n" +
                "DÜZGÜNNAMASY\n",
            "parts":"Türkmenistanyň Körler we kerler jemgyýetiniň (TKKJ) gurluşy",
            "other_about":"Biz barada goşmaça maglumatlar",
            "links":"Salgylanmalar"
        },
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "tm", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;