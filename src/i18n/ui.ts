import { sk as skPrologue, en as enPrologue } from './data/prologue';
import { sk as skNews, en as enNews } from './data/news';

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

        ...enPrologue,
        ...enNews,
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

        ...skPrologue,
        ...skNews,
    },

} as const;