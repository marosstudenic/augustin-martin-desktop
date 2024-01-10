import { sk as skPrologue, en as enPrologue } from './data/prologue';
import { sk as skNews, en as enNews } from './data/news';
import { sk as skProducts, en as enProducts } from './data/products';
import { sk as skTimePasses, en as enTimePasses } from './data/time-passes';
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

        ...enPrologue,
        ...enNews,
        ...enProducts,
        ...enTimePasses

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

        ...skPrologue,
        ...skNews,
        ...skProducts,
        ...skTimePasses
    },

} as const;