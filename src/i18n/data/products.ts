
export interface IProductCategory {
    name: string;
    image: string;
    link: string;
}

export const sk = {

    'products.title': 'Produkty, ktoré je možné zakúpiť',
    'products.send-order': 'Objednávku pošlite mailom na',
    'products.authors': 'Autori:',
    'products.meta.description': 'Dielo Martina Augustína',

    'products.categories': [{
        name: "Publikácie",
        image: "/src/assets/news/brozovanaPublikacia_obrazyTextySentencie.jpg",
        link: "/publikacie/kytice",
    },
    {
        name: "Textílie",
        image: "/src/assets/news/hodvabnaSatka.jpg",
        link: "/textilie/hodvabna-satka",
    },
    {
        name: "Grafické listy",
        image: "/src/assets/news/grafList_slnkoNadHlavou.jpg",
        link: "/listy/slnko-nad-hlavou",
    },
    {
        name: "Limitované edície",
        image: "/src/assets/news/limitovane_senMenomLaska.jpg",
        link: "/limitovane/sen-menom-laska",
    },],

    'products.details.categories': {
        publikacie: {
            title: "Publikácie",
            slug: "publikacie",
            items: [
                {
                    title: "KYTICE",
                    slug: "kytice",
                    author: "Karel Jaromír Erben",
                    image: "/src/assets/produkty/kytice.jpg",
                    descriptions: [
                        "litografia",
                        "23 × 23 cm, 252 stran",
                        "290 €",
                        "Dostupné cez <a target='_blank' href='https://www.luxusnakniznica.sk/kytice' class='text-gray-600 cursor-pointer hover:text-gray-900 underline'>luxusnakniznica.sk/kytice</a> (SK)",
                        "Dostupné cez <a target='_blank' href='https://www.rosier.cz/' class='text-gray-600 cursor-pointer hover:text-gray-900 underline'>rosier.cz</a> (CZ)",
                    ],
                },
                {
                    title: "Obrazy, texty, sentencie",
                    slug: "obrazy-texty-sentencie",
                    image: "/src/assets/produkty/brozovanaPublikacia_obrazyTextySentencie.jpg",
                    author: "Kamil Peteraj, Martin Augustín",
                    descriptions: [
                        "brožovaná publikácia",
                        "40 strán, 38 x 30 cm",
                        "40€ + poštovné",
                    ],
                },
                {
                    title: "Zrkadlo duše",
                    slug: "zrkadlo-duse",
                    author: "Martin Augustín, autor textu Ľudovít Petranský",
                    image: "/src/assets/produkty/zrkadlo_duse.jpg",
                    descriptions: [
                        "monografia",
                        "214 strán, 31 x 25,5 cm",
                        "39€ + poštovné",
                    ],
                },
                {
                    title: "Máj",
                    slug: "maj",
                    author: "Hynek Karel Mácha",
                    image: "/src/assets/produkty/obalka_knihy_maj.jpg",
                    descriptions: [
                        "22,54€ + poštovné",
                        "Dostupné cez <a href='https://www.martinus.sk/?uItem=1548731&gclid=CjwKCAjw2f-VBhAsEiwAO4lNeCilwRS-' class='text-gray-600 cursor-pointer hover:text-gray-900 underline'>martinus.sk</a>",
                    ],
                },
            ],
        },
        textilie: {
            title: "Textilie",
            slug: "textilie",
            items: [
                {
                    title: "Hodvábna šatka s motívom obrazu Martina Augustína",
                    slug: "hodvabna-satka",
                    image: "/src/assets/produkty/hodvabnaSatka_detail.jpg",
                    altImage: "/src/assets/produkty/hodvabnaSatkaObraz.jpg",
                    descriptions: ["90 x 90 cm", "90€ + poštovné"],
                },
            ],
        },
        grafickeListy: {
            title: "Grafické listy",
            slug: "listy",
            items: [
                {
                    title: "Slnko nad hlavou",
                    slug: "slnko-nad-hlavou",
                    image: "/src/assets/produkty/grafList_slnkoNadHlavou.jpg",
                    descriptions: [
                        "technika limitovaný ofset",
                        "náklad 200 ks, 70 x 50 cm",
                        "Nedostupné",
                        "signovaný autormi Martinom Augustínom, Kamilom Peterajom\n",
                    ],
                },
                {
                    title: "Raz uvidíš",
                    slug: "raz-uvidis",
                    image: "/src/assets/produkty/grafList_razUvidis.jpg",
                    descriptions: [
                        "technika limitovaný ofset",
                        "náklad 200 ks, 70 x 50 cm",
                        "Nedostupné",
                        "signovaný autormi Martinom Augustínom, Kamilom Peterajom\n",
                    ],
                },
            ],
        },
        limitovaneEdicie: {
            title: "Limitované edície",
            slug: "limitovane",
            items: [
                {
                    title: "Sen menom láska",
                    slug: "sen-menom-laska",
                    image: "/src/assets/produkty/limitovane_senMenomLaska.jpg",
                    descriptions: [
                        "limitovaná kniha poézie",
                        "hodvábna šatka s dielom M. Augustína",
                        "certifikát vlastníctva",
                        "300€ + poštovné",
                        "nedostupné",
                    ],
                },
            ],
        },
    }
}

export const en = {
    'products.title': 'Products available for purchase',
    'products.send-order': 'Email the order to',
    'products.authors': 'authored by',
    'products.meta.description': 'Collection of Martin Augustín\'s work',


    'products.categories': [{
        name: "Publications",
        image: "/src/assets/news/brozovanaPublikacia_obrazyTextySentencie.jpg",
        link: "/publikacie/kytice",
    },
    {
        name: "Textiles",
        image: "/src/assets/news/hodvabnaSatka.jpg",
        link: "/textilie/hodvabna-satka",
    },
    {
        name: "Art prints",
        image: "/src/assets/news/grafList_slnkoNadHlavou.jpg",
        link: "/listy/slnko-nad-hlavou",
    },
    {
        name: "Limited editions",
        image: "/src/assets/news/limitovane_senMenomLaska.jpg",
        link: "/limitovane/sen-menom-laska",
    },],
    'products.details.categories': {
        publikacie: {
            title: "Publications",
            slug: "publikacie",
            items: [
                {
                    title: "KYTICE",
                    slug: "kytice",
                    author: "KAREL JAROMÍR ERBEN",
                    image: "produkty/kytice.jpg",
                    descriptions: [
                        "lithography",
                        "23 × 23 cm, 252 pages",
                        "290 €",
                        "available at <a target='_blank' href='https://www.luxusnakniznica.sk/kytice' class='text-gray-600 cursor-pointer hover:text-gray-900 underline'>luxusnakniznica.sk/kytice</a> (SK)",
                        "available at <a target='_blank' href='https://www.rosier.cz/' class='text-gray-600 cursor-pointer hover:text-gray-900 underline'>rosier.cz</a> (CZ)",
                    ],
                },
                {
                    title: "Obrazy, texty, sentencie",
                    slug: "obrazy-texty-sentencie",
                    image: "spoluprace/brozovanaPublikacia_obrazyTextySentencie.jpg",
                    author: "Kamil Peteraj and Martin Augustín",
                    descriptions: [
                        "paperback",
                        "40 pages, 38 x 30 cm",
                        "40€ + shipping",
                    ],
                },
                {
                    title: "Zrkadlo duše",
                    slug: "zrkadlo-duse",
                    author: "Martin Augustín, text authored by Ľudovít Petranský",
                    image: "spoluprace/zrkadlo_duse.jpg",
                    descriptions: [
                        "monograph",
                        "214 pages, 31 x 25,5 cm",
                        "39€ + shipping",
                    ],
                },
                {
                    title: "Máj",
                    slug: "maj",
                    author: "Hynek Karel Mácha",
                    image: "produkty/obalka_knihy_maj.jpg",
                    descriptions: [
                        "22,54€ + shipping",
                        "available at <a href='https://www.martinus.sk/?uItem=1548731&gclid=CjwKCAjw2f-VBhAsEiwAO4lNeCilwRS-' class='text-gray-600 cursor-pointer hover:text-gray-900 underline'>martinus.sk</a>",
                    ],
                },
            ],
        },
        textilie: {
            title: "Textiles",
            slug: "textilie",
            items: [
                {
                    title: "SILK SCARF WITH THE MOTIF OF MARTIN AUGUSTÍN’S WORK",
                    slug: "hodvabna-satka",
                    image: "produkty/hodvabnaSatka_detail.jpg",
                    altImage: "produkty/hodvabnaSatkaObraz.jpg",
                    descriptions: ["90 x 90 cm", "90€ + shipping"],
                },
            ],
        },
        grafickeListy: {
            title: "Art prints",
            slug: "listy",
            items: [
                {
                    title: "Slnko nad hlavou",
                    slug: "slnko-nad-hlavou",
                    image: "produkty/grafList_slnkoNadHlavou.jpg",
                    descriptions: [
                        "limited offset printing technique",
                        "printing 200 ks, 70 x 50 cm",
                        "Unavailable",
                        "signed by the authors Martin Augustín and Kamil Peteraj\n",
                    ],
                },
                {
                    title: "Raz uvidíš",
                    slug: "raz-uvidis",
                    image: "produkty/grafList_razUvidis.jpg",
                    descriptions: [
                        "limited offset printing technique",
                        "printing 200 ks, 70 x 50 cm",
                        "Unavailable",
                        "signed by the authors Martin Augustín and Kamil Peteraj\n",
                    ],
                },
            ],
        },
        limitovaneEdicie: {
            title: "Limited editions",
            slug: "limitovane",
            items: [
                {
                    title: "Sen menom láska",
                    slug: "sen-menom-laska",
                    image: "produkty/limitovane_senMenomLaska.jpg",
                    descriptions: [
                        "limited book of poetry",
                        "silk scarf with the motif of M. Augustín’s work",
                        "certificate of ownership",
                        "300€ + shipping",
                        "not available",
                    ],
                },
            ],
        },
    }
}
