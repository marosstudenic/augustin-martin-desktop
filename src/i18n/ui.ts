import { sk as skPrologue, en as enPrologue } from './data/prologue';
import { sk as skNews, en as enNews } from './data/news';
import { sk as skProducts, en as enProducts } from './data/products';
import { sk as skTimePasses, en as enTimePasses } from './data/time-passes';
import { sk as skBiography, en as enBiography } from './data/biography';
import { sk as skExhibitions, en as enExhibitions } from './data/exhibitions';
import { sk as skWork, en as enWork } from './data/work';
import { sk as skIkar, en as enIkar } from './data/coworkWithIkar';
import { sk as skVideo, en as enVideo } from './data/video';
import { sk as skGallery, en as enGallery } from './data/gallery';
import { sk as skContact, en as enContact } from './data/contact';

export const languages = {
    en: 'English',
    sk: 'Slovenčína',
};

export const defaultLang = 'sk';
export const showDefaultLang = false;

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
        'utils.all': "All",
        'utils.contact': "Contact",
        'utils.next-image': 'Next image',

        ...enPrologue,
        ...enNews,
        ...enProducts,
        ...enTimePasses,
        ...enBiography,
        ...enExhibitions,
        ...enWork,
        ...enIkar,
        ...enVideo,
        ...enGallery,
        ...enContact

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
        'utils.all': 'Všetky',
        'utils.contact': "Kontaktovať",
        'utils.next-image': 'Ďalší obrázok',

        ...skPrologue,
        ...skNews,
        ...skProducts,
        ...skTimePasses,
        ...skBiography,
        ...skExhibitions,
        ...skWork,
        ...skIkar,
        ...skVideo,
        ...skGallery,
        ...skContact
    },

} as const;