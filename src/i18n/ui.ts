import { sk as skPrologue, en as enPrologue } from './data/prologue';
import { sk as skNews, en as enNews } from './data/news';
import { sk as skProducts, en as enProducts } from './data/products';
import { sk as skTimePasses, en as enTimePasses } from './data/time-passes';
import { sk as skBiography, en as enBiography } from './data/biography';
import { sk as skExhibitions, en as enExhibitions } from './data/exhibitions';
import { sk as skWork, en as enWork } from './data/work';
import { sk as skIkar, en as enIkar } from './data/coworkWithIkar';
export const languages = {
    en: 'English',
    sk: 'Slovenčína',
};

export const defaultLang = 'sk';

export const ui = {
    en: {
        'nav.prologue': 'Prologue',
        'nav.news': 'News',
        'nav.time-passes': 'Time passes',
        'nav.biography': 'Biography',
        'nav.exhibitions': 'Exhibitions',
        'nav.work': 'Work',
        'nav.ikar': 'IKAR',
        'nav.video': 'Video',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact',
        'utils.more': 'More',
        'utils.expand': 'expand',
        'utils.hide': 'hide',
        'utils.next': 'next',

        ...enPrologue,
        ...enNews,
        ...enProducts,
        ...enTimePasses,
        ...enBiography,
        ...enExhibitions,
        ...enWork,
        ...enIkar

    },
    sk: {
        'nav.prologue': 'Úvod',
        'nav.news': 'Novinky',
        'nav.time-passes': 'Čas plynie',
        'nav.biography': 'Životopis',
        'nav.exhibitions': 'Výstavy',
        'nav.work': 'Tvorba',
        'nav.ikar': 'IKAR',
        'nav.video': 'Video',
        'nav.gallery': 'Fotogaléria',
        'nav.contact': 'Kontakt',


        'utils.more': 'Viac',
        'utils.expand': 'rozbaliť',
        'utils.hide': 'skryť',
        'utils.next': 'nasledujúca',

        ...skPrologue,
        ...skNews,
        ...skProducts,
        ...skTimePasses,
        ...skBiography,
        ...skExhibitions,
        ...skWork,
        ...skIkar
    },

} as const;